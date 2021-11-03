/**
 * Backstop config.
 *
 * Site Kit by Google, Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const scenarios = require( './scenarios' );
const viewports = require( './viewports' );

// If run from the host, detect the proper target host and set the hostname arg.
// This will be passed through with the `backstop` command run with docker.
const hasStorybookHostArg = process.argv.some( ( arg ) =>
	arg.startsWith( '--storybook-host' )
);
if ( process.argv.includes( '--docker' ) && ! hasStorybookHostArg ) {
	const hostname = require( './detect-storybook-host' );
	process.argv.push( `--storybook-host=http://${ hostname }:9001/` );
}

module.exports = {
	onBeforeScript: 'puppet/onBefore.js',
	// asyncCaptureLimit: 5,
	// asyncCompareLimit: 50,
	asyncCaptureLimit: 1,
	asyncCompareLimit: 1,
	debug: true,
	debugWindow: false,
	// Use a custom command template to make sure it works correctly in the GitHub actions environment.
	// The only difference between the original dockerCommandTemplate and this one is that we use --tty flag
	// in the current template only if it is supported by the current STDOUT stream.
	// dockerCommandTemplate: 'docker run --rm --shm-size=1G ubuntu df -h',
	dockerCommandTemplate: `docker run --shm-size=1G --rm -i${
		process.stdout.isTTY ? ' --tty' : ''
	} --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}`,
	engine: 'puppeteer',
	engineOptions: {
		args: [ '--no-sandbox' ],
	},
	id: 'google-site-kit',
	paths: {
		bitmaps_reference: 'tests/backstop/reference',
		bitmaps_test: 'tests/backstop/tests',
		engine_scripts: 'tests/backstop/engine_scripts',
		html_report: 'tests/backstop/html_report',
		ci_report: 'tests/backstop/ci_report',
	},
	report: [ 'browser' ],
	scenarios,
	viewports,
	readySelector: 'body.backstopjs-ready',
	misMatchThreshold: 0,
	delay: 1000, // Default delay to ensure components render complete.
};
