/**
 * Optimize Setup form.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
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
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Data from 'googlesitekit-data';
import Button from '../../../components/button';
import { STORE_NAME } from '../datastore/constants';
import { isValidOptimizeID } from '../util';
import ErrorText from '../../../components/error-text';
import {
	ErrorNotice,
	AMPExperimentJSONField,
	OptimizeIDField,
	InstructionInformation,
	FormInstructions,
} from '../common/';
const { useSelect, useDispatch } = Data;

export default function SetupForm( { finishSetup } ) {
	const canSubmitChanges = useSelect( ( select ) => select( STORE_NAME ).canSubmitChanges() );
	const optimizeID = useSelect( ( select ) => select( STORE_NAME ).getOptimizeID() );

	const { submitChanges } = useDispatch( STORE_NAME );
	const submitForm = useCallback( async ( event ) => {
		event.preventDefault();
		const { error } = await submitChanges();
		if ( ! error ) {
			finishSetup();
		}
	}, [ canSubmitChanges, finishSetup ] );

	const message = __( 'Error: Not a valid Optimize ID.', 'google-site-kit' );

	return (
		<form
			className="googlesitekit-optimize-setup__form"
			onSubmit={ submitForm }
		>
			<FormInstructions />

			<ErrorNotice />

			<div className="googlesitekit-setup-module__inputs">
				<OptimizeIDField />
			</div>

			{ ! isValidOptimizeID( optimizeID ) && optimizeID &&
				<p className="googlesitekit-error-text">
					<ErrorText message={ message } />
				</p>
			}

			<AMPExperimentJSONField />

			<InstructionInformation />

			<div className="googlesitekit-setup-module__action">
				<Button disabled={ ! canSubmitChanges }>
					{ __( 'Configure Optimize', 'google-site-kit' ) }
				</Button>
			</div>
		</form>
	);
}

SetupForm.propTypes = {
	finishSetup: PropTypes.func,
};

SetupForm.defaultProps = {
	finishSetup: () => {},
};
