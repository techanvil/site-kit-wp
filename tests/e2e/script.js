#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * E2E Test Script Runner
 *
 * This file was originally copied from the @wordpress/scripts package, version 12.0.0:
 * https://github.com/WordPress/gutenberg/blob/8e06f0d212f89adba9099106497117819adefc5a/packages/scripts/scripts/test-e2e.js
 * This file is subject to the Mozilla Public License 2.0, as it is from the `@wordpress/scripts` package, released under the same license: https://github.com/WordPress/gutenberg/blob/trunk/LICENSE.md.
 */

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', ( err ) => {
	throw err;
} );

/**
 * External dependencies
 */
/* eslint-disable-next-line jest/no-jest-import */
const jest = require( 'jest' );
const { sync: spawn } = require( 'cross-spawn' );

// getArgsFromCLI inlined from @wordpress/scripts utils/process.js v12.0.0.
// https://github.com/WordPress/gutenberg/blob/8e06f0d212f89adba9099106497117819adefc5a/packages/scripts/utils/process.js#L1-L11

const getArgsFromCLI = ( excludePrefixes ) => {
	const args = process.argv.slice( 2 );
	if ( excludePrefixes ) {
		return args.filter( ( arg ) => {
			return ! excludePrefixes.some( ( prefix ) =>
				arg.startsWith( prefix )
			);
		} );
	}
	return args;
};

// getArgFromCLI and hasArgInCLI inlined from @wordpress/scripts utils/cli.js v12.0.0.
// https://github.com/WordPress/gutenberg/blob/8e06f0d212f89adba9099106497117819adefc5a/packages/scripts/utils/cli.js#L13-L22

const getArgFromCLI = ( arg ) => {
	for ( const cliArg of getArgsFromCLI() ) {
		const [ name, value ] = cliArg.split( '=' );
		if ( name === arg ) {
			return value || null;
		}
	}
};

const hasArgInCLI = ( arg ) => getArgFromCLI( arg ) !== undefined;

// New retry-until-failure configuration
const maxRetries = parseInt( getArgFromCLI( '--max-retries' ) || '100', 10 );
const retryUntilFailure = hasArgInCLI( '--retry-until-failure' );
const retryTest = getArgFromCLI( '--retry-test' );

const result = spawn( 'node', [ require.resolve( 'puppeteer/install' ) ], {
	stdio: 'inherit',
} );

if ( result.status > 0 ) {
	process.exit( result.status );
}

const config = [ '--config=jest.config.js' ];

const hasRunInBand = hasArgInCLI( '--runInBand' ) || hasArgInCLI( '-i' );
const runInBand = ! hasRunInBand ? [ '--runInBand' ] : [];

if ( hasArgInCLI( '--puppeteer-interactive' ) ) {
	process.env.PUPPETEER_HEADLESS = 'false';
	process.env.PUPPETEER_SLOWMO = getArgFromCLI( '--puppeteer-slowmo' ) || 80;
}

if ( hasArgInCLI( '--puppeteer-devtools' ) ) {
	process.env.PUPPETEER_HEADLESS = 'false';
	process.env.PUPPETEER_DEVTOOLS = 'true';
}

const configsMapping = {
	WP_BASE_URL: '--wordpress-base-url',
	WP_USERNAME: '--wordpress-username',
	WP_PASSWORD: '--wordpress-password',
};

Object.entries( configsMapping ).forEach( ( [ envKey, argName ] ) => {
	if ( hasArgInCLI( argName ) ) {
		process.env[ envKey ] = getArgFromCLI( argName );
	}
} );

const cleanUpPrefixes = [ '--puppeteer-', '--wordpress-' ];

async function runTests( args ) {
	if ( ! retryUntilFailure ) {
		return jest.run( args );
	}

	let attempt = 1;
	while ( attempt <= maxRetries ) {
		console.log( `\n🔄 Attempt ${ attempt } of ${ maxRetries }` );
		const testArgs = [
			...args,
			retryTest ? `-t="${ retryTest }"` : '', // Focus on specific test if provided
		].filter( Boolean );

		try {
			const jestResult = await jest.runCLI( { _: testArgs }, [
				process.cwd(),
			] );
			if ( jestResult.results.success === false ) {
				console.log( `\n🎯 Test failed on attempt ${ attempt }` );
				process.exit( 1 );
			}
			console.log(
				`\n✅ Tests passed on attempt ${ attempt }, continuing...`
			);
		} catch ( error ) {
			console.log(
				`\n💥 Test failed with error on attempt ${ attempt }:`,
				error
			);
			process.exit( 1 );
		}
		attempt++;
	}
	console.log( `\n⚠️ Test did not fail after ${ maxRetries } attempts` );
	process.exit( 0 );
}

const args = [ ...config, ...runInBand, ...getArgsFromCLI( cleanUpPrefixes ) ];
runTests( args ).catch( ( error ) => {
	console.error( error );
	process.exit( 1 );
} );
