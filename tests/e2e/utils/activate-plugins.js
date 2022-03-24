/**
 * `activatePlugins` utility.
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
import {
	switchUserToAdmin,
	switchUserToTest,
	visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { step } from './step-and-screenshot';

/**
 * Performs an action on provided plugins.
 *
 * @since 1.42.0
 *
 * @param {string}         action  An action to perform.
 * @param {Array.<string>} plugins Plugin slugs.
 * @return {Promise<void>} A promise object that indicates when the action ends.
 */
async function bulkPluginsAction( action, plugins ) {
	await switchUserToAdmin();
	await visitAdminPage( 'plugins.php' );

	for ( const plugin of plugins ) {
		await page
			.click( `tr[data-slug="${ plugin }"] input` )
			.catch( () => {} );
	}

	await page.select( '#bulk-action-selector-top', action );
	await page.click( '#doaction' );
	await page.waitForNavigation();

	await switchUserToTest();
}

/**
 * Activates installed plugins.
 *
 * @since 1.27.0
 *
 * @param {Array.<string>} plugins Plugin slugs.
 * @return {Promise<void>} A promise object that indicates when the plugins activation ends.
 */
export function activatePlugins( ...plugins ) {
	return bulkPluginsAction( 'activate-selected', plugins );
}

/**
 * Deactivates installed plugins.
 *
 * @since 1.42.0
 *
 * @param {Array.<string>} plugins Plugin slugs.
 * @return {Promise<void>} A promise object that indicates when the plugins deactivation ends.
 */
export function deactivatePlugins( ...plugins ) {
	return bulkPluginsAction( 'deactivate-selected', plugins );
}

export async function doActivatePlugin( slug ) {
	await switchUserToAdmin();
	await visitAdminPage( 'plugins.php' );
	const disableLink = await page.$(
		`tr[data-slug="${ slug }"] .deactivate a`
	);
	if ( disableLink ) {
		await switchUserToTest();
		return;
	}
	// await page.waitForTimeout( 5000 );
	await step(
		`wait for ${ slug } plugin activate link`,
		page.waitForSelector( `tr[data-slug="${ slug }"] .activate a` )
	);
	await page.click( `tr[data-slug="${ slug }"] .activate a` );
	await step(
		`wait for ${ slug } plugin deactivate link`,
		page.waitForSelector( `tr[data-slug="${ slug }"] .deactivate a` )
	);
	// await page.waitForTimeout( 5000 );
	await page.waitForSelector( `tr[data-slug="${ slug }"] .deactivate a` );
	await switchUserToTest();
}
