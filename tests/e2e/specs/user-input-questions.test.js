/**
 * User Input Settings tests.
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

/**
 * WordPress dependencies
 */
import { visitAdminPage } from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import {
	activatePlugins,
	deactivateUtilityPlugins,
	resetSiteKit,
	setupSiteKit,
	useRequestInterception,
	pageWait,
	step,
	setSearchConsoleProperty,
	setupAnalytics4,
} from '../utils';
import {
	STRATEGY_CARTESIAN,
	STRATEGY_ZIP,
	getAnalytics4MockResponse,
} from '../../../assets/js/modules/analytics-4/utils/data-mock';
import { getSearchConsoleMockResponse } from '../../../assets/js/modules/search-console/util/data-mock';
import getMultiDimensionalObjectFromParams from '../utils/get-multi-dimensional-object-from-params';
import { shouldLog } from '../config/bootstrap';

describe( 'User Input Settings', () => {
	function debugLog( message ) {
		if ( ! shouldLog() ) {
			return;
		}

		// eslint-disable-next-line no-console
		console.debug( `DEBUG: ${ message }` );
	}

	async function fillInInputSettings() {
		debugLog( 'waiting for input settings question to load' );
		await page.waitForSelector( '.googlesitekit-user-input__question' );

		debugLog( 'selecting purpose' );
		await step( 'select purpose', async () => {
			await expect( page ).toClick( '#purpose-publish_blog' );
		} );

		debugLog( 'waiting for next button to load 1' );
		await page.waitForSelector(
			'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next',
			{
				timeout: 10_000,
			}
		);

		debugLog( 'clicking next button' );
		await expect( page ).toClick(
			'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next'
		);

		debugLog( 'waiting for post frequency question to load' );
		await pageWait();

		debugLog( 'selecting post frequency' );
		await step( 'select post frequency', async () => {
			await expect( page ).toClick( '#postFrequency-monthly' );
		} );

		debugLog( 'waiting for next button to load 2' );
		await page.waitForSelector(
			'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next',
			{
				timeout: 10_000,
			}
		);

		debugLog( 'clicking next button' );
		await expect( page ).toClick(
			'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next'
		);

		debugLog( 'waiting for goals question to load' );
		await pageWait();

		debugLog( 'selecting goals' );
		await step( 'select goals', async () => {
			debugLog( 'selecting retaining visitors goal' );
			await expect( page ).toClick( '#goals-retaining_visitors' );

			debugLog( 'selecting improving performance goal' );
			await expect( page ).toClick( '#goals-improving_performance' );

			debugLog( 'selecting help better rank goal' );
			await expect( page ).toClick( '#goals-help_better_rank' );
		} );

		// debugLog( 'waiting for next button to load 3' );
		// await page.waitForSelector(
		// 	'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next',
		// 	{
		// 		timeout: 10_000,
		// 	}
		// );

		// debugLog( 'clicking next button' );
		// await expect( page ).toClick(
		// 	'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--next'
		// );

		debugLog( 'waiting for settings submission' );
		await pageWait();

		debugLog( 'clicking complete button' );
		await step(
			'wait for settings submission',
			Promise.all( [
				expect( page ).toClick(
					'.googlesitekit-user-input__question .googlesitekit-user-input__buttons--complete',
					{ text: /complete setup/i }
				),
				page.waitForNavigation(),
			] )
		);

		debugLog( 'waiting for key metric tile to appear' );
		await pageWait( 600 );

		debugLog( 'waiting for key metric tile to appear' );
		await step(
			'wait for a Key Metric tile to successfully appear',
			page.waitForSelector(
				'.googlesitekit-widget--kmAnalyticsTopReturningVisitorPages'
			)
		);

		debugLog( 'waited for key metric tile to appear' );
	}

	beforeAll( async () => {
		debugLog( 'setting up request interception' );
		await page.setRequestInterception( true );

		useRequestInterception( ( request ) => {
			const url = request.url();

			const paramsObject = Object.fromEntries(
				new URL( url ).searchParams.entries()
			);

			// Provide mock data for Analytics 4 and Search Console requests to ensure they are not in the "gathering data" state.
			if (
				url.match(
					'/google-site-kit/v1/modules/analytics-4/data/report?'
				)
			) {
				// Some of the keys are nested paths e.g. `metrics[0][name]`, so we need to convert the search params to a multi-dimensional object.
				const multiDimensionalObjectParams =
					getMultiDimensionalObjectFromParams( paramsObject );

				// At the time of writing, the report used in `getPageTitles()` is the only report that specifies an array of `pagePath` values in
				// the `dimensionFilters` object.
				const isPageTitlesReport = Array.isArray(
					multiDimensionalObjectParams?.dimensionFilters?.pagePath
				);

				// Use the zip combination strategy for the page titles report to ensure a one-to-one mapping of page paths to page titles.
				// Otherwise, by using the default cartesian product of dimension values, the resulting output will have non-matching
				// page paths to page titles.
				const dimensionCombinationStrategy = isPageTitlesReport
					? STRATEGY_ZIP
					: STRATEGY_CARTESIAN;

				request.respond( {
					status: 200,
					body: JSON.stringify(
						getAnalytics4MockResponse(
							multiDimensionalObjectParams,
							{ dimensionCombinationStrategy }
						)
					),
				} );
			} else if (
				request
					.url()
					.match(
						'google-site-kit/v1/core/user/data/audience-settings'
					)
			) {
				request.respond( {
					status: 200,
					body: JSON.stringify( {
						configuredAudiences: [],
					} ),
				} );
			} else if (
				url.match(
					'/google-site-kit/v1/modules/search-console/data/searchanalytics?'
				)
			) {
				request.respond( {
					status: 200,
					body: JSON.stringify(
						getSearchConsoleMockResponse( paramsObject )
					),
				} );
			} else if (
				url.match(
					'/google-site-kit/v1/modules/search-console/data/data-available'
				)
			) {
				request.continue();
			} else if (
				url.match(
					'/google-site-kit/v1/modules/analytics-4/data/data-available'
				)
			) {
				request.continue();
			} else if ( url.match( '/google-site-kit/v1/modules' ) ) {
				request.respond( { status: 200 } );
			} else {
				request.continue();
			}
		} );
	} );

	beforeEach( async () => {
		debugLog( 'activating plugins' );
		await activatePlugins(
			'e2e-tests-proxy-setup',
			'e2e-tests-oauth-callback-plugin'
		);

		debugLog( 'setting up search console' );
		await setSearchConsoleProperty();

		debugLog( 'enabling request interception' );
		await page.setRequestInterception( true );
	} );

	afterEach( async () => {
		debugLog( 'deactivating utility plugins' );
		await deactivateUtilityPlugins();

		debugLog( 'resetting site kit' );
		await resetSiteKit();

		debugLog( 'reset site kit complete' );
	} );

	it( 'should offer to enter input settings for existing users', async () => {
		debugLog( 'setting up site kit' );

		await setupSiteKit();

		debugLog( 'disabling request interception' );
		await page.setRequestInterception( false );

		debugLog( 'setting up analytics 4' );
		await setupAnalytics4();

		debugLog( 'enabling request interception' );
		await page.setRequestInterception( true );

		debugLog( 'setting up search console' );
		await setSearchConsoleProperty();

		debugLog( 'visiting admin dashboard' );
		await step(
			'visit admin dashboard',
			visitAdminPage( 'admin.php', 'page=googlesitekit-dashboard' )
		);

		debugLog( 'waiting for data available requests to complete' );
		await Promise.all( [
			page.waitForResponse( ( res ) =>
				res
					.url()
					.match(
						'/google-site-kit/v1/modules/search-console/data/data-available'
					)
			),
			page.waitForResponse( ( res ) =>
				res
					.url()
					.match(
						'/google-site-kit/v1/modules/analytics-4/data/data-available'
					)
			),
		] );

		debugLog( 'reloading page' );
		// On the first load of the dashboard, report requests made by the isGatheringData selector for SC and GA4
		// will fetch some data since we intercept those requests providing mock report data. This the data-available
		// endpoint which sets the appropriate transients that will be prefetched only on the next page load.
		await page.reload();

		debugLog( 'clicking on key metrics navigation tab' );
		await step(
			'click on key metrics navigation tab and scroll to the key metrics widget',
			async () => {
				await page.waitForSelector( '.googlesitekit-navigation', {
					timeout: 10_000,
				} );
				await expect( page ).toClick( '.mdc-chip', {
					text: /key metrics/i,
				} );
			}
		);

		debugLog( 'clicking on CTA button and waiting for navigation' );
		await step( 'click on CTA button and wait for navigation', async () => {
			debugLog( 'waiting for CTA button to appear' );
			await page.waitForSelector(
				'.googlesitekit-setup__wrapper--key-metrics-setup-cta'
			);

			debugLog( 'clicking on CTA button' );
			await Promise.all( [
				expect( page ).toClick(
					'.googlesitekit-widget-key-metrics-actions__wrapper .googlesitekit-key-metrics-cta-button'
				),
				page.waitForNavigation(),
			] );
		} );

		debugLog( 'filling in input settings' );
		await fillInInputSettings();

		debugLog( 'filled in input settings' );
	} );

	it( 'should let existing users enter input settings from the settings page', async () => {
		debugLog( 'setting up site kit' );
		await setupSiteKit();

		debugLog( 'disabling request interception' );
		await page.setRequestInterception( false );

		debugLog( 'setting up analytics 4' );
		await setupAnalytics4();

		debugLog( 'enabling request interception' );
		await page.setRequestInterception( true );

		debugLog( 'setting up search console' );
		await setSearchConsoleProperty();

		debugLog( 'visiting admin settings' );
		await step( 'visit admin settings', async () => {
			debugLog( 'visiting admin settings page' );
			await visitAdminPage( 'admin.php', 'page=googlesitekit-settings' );

			debugLog( 'waiting for admin settings page to load' );
			await pageWait();

			debugLog( 'waiting for tab bar to load' );
			await page.waitForSelector( '.mdc-tab-bar a.mdc-tab' );

			debugLog( 'clicking on admin settings tab' );
			await expect( page ).toClick( 'a.mdc-tab', {
				text: /admin settings/i,
			} );
		} );

		debugLog( 'clicking on CTA button and waiting for navigation' );
		await step( 'click on CTA button and wait for navigation', async () => {
			debugLog( 'waiting for CTA button to appear' );
			await page.waitForSelector(
				'.googlesitekit-acr-subtle-notification'
			);

			debugLog( 'clicking on CTA button' );
			await Promise.all( [
				expect( page ).toClick(
					'.googlesitekit-acr-subtle-notification .googlesitekit-button-icon--spinner'
				),
				page.waitForNavigation(),
			] );
		} );

		debugLog( 'waiting for page to load' );
		await pageWait();

		debugLog( 'filling in input settings' );
		await fillInInputSettings();

		debugLog( 'filled in input settings' );
	} );
} );
