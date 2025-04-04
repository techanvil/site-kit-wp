#!/usr/bin/env node

/**
 * Check Test Result Script.
 *
 * This script checks if a specific test failed in the Jest test results.
 * It reads the test-results.json file and looks for a test matching the given name.
 *
 * Usage:
 *   RETRY_TEST_NAME="test name" node check-test-result.js
 *
 * Exit codes:
 *   0 - Test was found and failed.
 *   1 - Test was not found or passed.
 *   2 - test-results.json not found or other error.
 */

const fs = require( 'fs' );
const path = require( 'path' );

const testName = process.env.RETRY_TEST_NAME;
if ( ! testName ) {
	process.stdout.write(
		'Error: RETRY_TEST_NAME environment variable is required\n'
	);
	process.exit( 2 );
}

// Use test results directory at repo root
const repoRoot = path.resolve( __dirname, '../../' );
const resultsDir = path.join( repoRoot, 'e2e-test-results' );
const resultsID = process.env.TEST_RESULTS_ID || 'results';
const resultsPath = path.join( resultsDir, `${ resultsID }.json` );

if ( ! fs.existsSync( resultsPath ) ) {
	process.stdout.write(
		`Error: Test results file not found at ${ resultsPath }\n`
	);
	process.exit( 2 );
}

try {
	const results = JSON.parse( fs.readFileSync( resultsPath, 'utf8' ) );
	const failed = results.testResults.some( ( file ) =>
		file.assertionResults.some(
			( test ) =>
				test.title.includes( testName ) && test.status === 'failed'
		)
	);

	if ( failed ) {
		process.stdout.write( `🎯 Target test "${ testName }" failed\n` );
		process.exit( 0 );
	} else {
		process.stdout.write( `✅ Target test "${ testName }" passed\n` );
		process.exit( 1 );
	}
} catch ( error ) {
	process.stdout.write( `Error analyzing test results: ${ error }\n` );
	process.exit( 2 );
}
