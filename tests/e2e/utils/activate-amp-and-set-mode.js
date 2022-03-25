/**
 * `activateAMPWithMode` utility.
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
import { activatePlugin, visitAdminPage } from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import { wpApiFetch } from './';
import { step } from './step-and-screenshot';

/**
 * The allow list of AMP modes.
 */
export const allowedAMPModes = {
	primary: 'standard',
	secondary: 'transitional',
	standard: 'standard',
	transitional: 'transitional',
	reader: 'disabled',
};

/**
 * Activates AMP and set it to the correct mode.
 *
 * @since 1.10.0
 *
 * @param {string} mode The mode to set AMP to. Possible value of standard, transitional or reader.
 */
export const activateAMPWithMode = async ( mode ) => {
	await activatePlugin( 'amp' );
	await setAMPMode( mode );
};

/**
 * Sets AMP Mode.
 *
 * @since 1.10.0
 *
 * @param {string} mode The mode to set AMP to. Possible value of standard, transitional or reader.
 */
export const setAMPMode = async ( mode ) => {
	// Test to be sure that the passed mode is known.
	expect( allowedAMPModes ).toHaveProperty( mode );
	const ampMode = allowedAMPModes[ mode ];
	// Set the AMP mode
	await visitAdminPage( 'admin.php', 'page=amp-options' );

	// AMP v2
	const optionsRESTPath = await page.evaluate(
		() => window.ampSettings && window.ampSettings.OPTIONS_REST_PATH
	);
	if ( optionsRESTPath ) {
		const scannableURLsRESTPath = await page.evaluate(
			() => window.ampSettings.SCANNABLE_URLS_REST_PATH
		);

		await page.waitForSelector( `#template-mode-${ ampMode }` );

		const isAlreadySet = await page.evaluate( ( theAMPMode ) => {
			const templateMode = document.querySelector(
				`#template-mode-${ theAMPMode }`
			);
			return templateMode.checked;
		}, ampMode );

		if ( isAlreadySet ) {
			return;
		}

		await page.evaluate( ( theAMPMode ) => {
			const radio = document.querySelector(
				`#template-mode-${ theAMPMode }`
			);
			radio.click();
		}, ampMode );
		// await step(
		// 	`click on the AMP mode option ${ ampMode }`,
		// 	page.click( `#template-mode-${ ampMode }` )
		// );
		// await page.click( `#template-mode-${ ampMode }` );
		// await expect( page ).toClick( `#template-mode-${ ampMode }` );

		await Promise.all( [
			page.click( 'button[type="submit"]' ),

			page.waitForResponse( ( res ) =>
				res.url().match( optionsRESTPath )
			),
			// wpApiFetch( {
			// 	method: 'post',
			// 	path: optionsRESTPath,
			// 	data: {
			// 		theme_support: ampMode,
			// 	},
			// } ),
			// This:
			page.waitForResponse( ( res ) =>
				res.url().match( scannableURLsRESTPath )
			),
		] );
		// It looks like we might need to wait for something here to prevent SiteScanContextProvider from throwing its error.
		return;
	}
	// if ( optionsRESTPath ) {
	// 	await expect( page ).toClick( `#template-mode-${ ampMode }` );
	// 	await expect( page ).toClick( 'button[type="submit"]' );
	// 	await page.waitForNavigation();
	// 	return;
	// }

	// AMP v1
	await expect( page ).toClick( `#theme_support_${ ampMode }` );
	await expect( page ).toClick( '#submit' );
	await page.waitForNavigation();
};
