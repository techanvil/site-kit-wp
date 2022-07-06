/**
 * Overview component for SearchFunnelWidget.
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
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Data from 'googlesitekit-data';
import { Grid, Row, Cell } from '../../../../../material-components';
import { extractSearchConsoleDashboardData } from '../../../util';
import { calculateChange } from '../../../../../util';
import { CORE_MODULES } from '../../../../../googlesitekit/modules/datastore/constants';
import { CORE_SITE } from '../../../../../googlesitekit/datastore/site/constants';
import { MODULES_ANALYTICS } from '../../../../analytics/datastore/constants';
import { CORE_LOCATION } from '../../../../../googlesitekit/datastore/location/constants';
import { MODULES_SEARCH_CONSOLE } from '../../../datastore/constants';
import { useFeature } from '../../../../../hooks/useFeature';
import useDashboardType, {
	DASHBOARD_TYPE_MAIN,
	DASHBOARD_TYPE_ENTITY,
} from '../../../../../hooks/useDashboardType';
import CompleteModuleActivationCTA from '../../../../../components/CompleteModuleActivationCTA';
import ActivateModuleCTA from '../../../../../components/ActivateModuleCTA';
import ActivateAnalyticsCTA from './ActivateAnalyticsCTA';
import CreateGoalCTA from './CreateGoalCTA';
import CTA from '../../../../../components/notifications/CTA';
import DataBlock from '../../../../../components/DataBlock';
import ProgressBar from '../../../../../components/ProgressBar';
import ReportZero from '../../../../../components/ReportZero';
import {
	BREAKPOINT_SMALL,
	useBreakpoint,
} from '../../../../../hooks/useBreakpoint';
import useViewOnly from '../../../../../hooks/useViewOnly';
import { CORE_USER } from '../../../../../googlesitekit/datastore/user/constants';
const { useSelect, useInViewSelect } = Data;

function getDatapointAndChange( [ report ], selectedStat, divider = 1 ) {
	return {
		datapoint:
			report?.data?.totals?.[ 0 ]?.values?.[ selectedStat ] / divider,
		change: calculateChange(
			report?.data?.totals?.[ 1 ]?.values?.[ selectedStat ],
			report?.data?.totals?.[ 0 ]?.values?.[ selectedStat ]
		),
	};
}

const Overview = ( {
	analyticsData,
	analyticsGoalsData,
	analyticsVisitorsData,
	searchConsoleData,
	selectedStats,
	handleStatsSelection,
	dateRangeLength,
	error,
	WidgetReportError,
	showRecoverableAnalytics,
} ) => {
	const dashboardType = useDashboardType();
	const zeroDataStatesEnabled = useFeature( 'zeroDataStates' );
	const breakpoint = useBreakpoint();

	const viewOnly = useViewOnly();

	const canViewSharedAnalytics = useSelect( ( select ) => {
		if ( ! viewOnly ) {
			return true;
		}

		return select( CORE_USER ).canViewSharedModule( 'analytics' );
	} );

	const analyticsModuleConnected = useSelect( ( select ) =>
		select( CORE_MODULES ).isModuleConnected( 'analytics' )
	);
	const analyticsModuleActive = useSelect( ( select ) =>
		select( CORE_MODULES ).isModuleActive( 'analytics' )
	);
	const analyticsModuleActiveAndConnected =
		analyticsModuleActive && analyticsModuleConnected;

	const adminReauthURL = useSelect( ( select ) =>
		select( MODULES_ANALYTICS ).getAdminReauthURL()
	);
	const isNavigatingToReauthURL = useSelect( ( select ) =>
		select( CORE_LOCATION ).isNavigatingTo( adminReauthURL )
	);
	const isAnalyticsGatheringData = useInViewSelect( ( select ) =>
		analyticsModuleActiveAndConnected &&
		canViewSharedAnalytics &&
		! showRecoverableAnalytics
			? select( MODULES_ANALYTICS ).isGatheringData()
			: false
	);
	const isSearchConsoleGatheringData = useInViewSelect( ( select ) =>
		select( MODULES_SEARCH_CONSOLE ).isGatheringData()
	);
	const isAuthenticated = useSelect( ( select ) =>
		select( CORE_USER ).isAuthenticated()
	);

	const {
		totalClicks,
		totalImpressions,
		totalClicksChange,
		totalImpressionsChange,
	} = extractSearchConsoleDashboardData( searchConsoleData, dateRangeLength );

	let analyticsGoalsChange = null;
	let analyticsGoalsDatapoint = null;
	let analyticsBounceDatapoint = null;
	let analyticsBounceChange = null;
	let analyticsVisitorsDatapoint = null;
	let analyticsVisitorsChange = null;

	if (
		analyticsModuleActive &&
		Array.isArray( analyticsData ) &&
		Array.isArray( analyticsVisitorsData )
	) {
		( { change: analyticsGoalsChange } = getDatapointAndChange(
			analyticsData,
			0,
			100
		) );
		analyticsGoalsDatapoint =
			analyticsData?.[ 0 ]?.data?.totals?.[ 0 ]?.values[ 0 ];

		( {
			datapoint: analyticsBounceDatapoint,
			change: analyticsBounceChange,
		} = getDatapointAndChange( analyticsData, 1, 100 ) );

		analyticsVisitorsDatapoint =
			analyticsVisitorsData?.[ 0 ]?.data?.totals?.[ 0 ]?.values[ 0 ];
		( { change: analyticsVisitorsChange } = getDatapointAndChange(
			analyticsVisitorsData,
			0,
			100
		) );
	}

	const showAnalytics =
		( canViewSharedAnalytics &&
			analyticsModuleConnected &&
			! isAnalyticsGatheringData &&
			! zeroDataStatesEnabled &&
			! error ) ||
		( canViewSharedAnalytics &&
			analyticsModuleConnected &&
			zeroDataStatesEnabled &&
			! error );

	const showGoalsCTA =
		isAuthenticated &&
		showAnalytics &&
		dashboardType === DASHBOARD_TYPE_MAIN &&
		! analyticsGoalsData?.items?.length;

	const quarterCellProps = {
		smSize: 2,
		mdSize: showGoalsCTA && zeroDataStatesEnabled ? 4 : 2,
		lgSize: 3,
	};

	const oneThirdCellProps = {
		smSize: 2,
		mdSize: 4,
		lgSize: 4,
	};

	const halfCellProps = {
		smSize: 4,
		mdSize: 4,
		lgSize: 6,
	};

	const threeQuartersCellProps = {
		smSize: 4,
		mdSize: 4,
		lgSize: 9,
	};

	const fullCellProps = {
		smSize: 4,
		mdSize: 8,
		lgSize: 12,
	};

	const supportURL = useSelect( ( select ) =>
		select( CORE_SITE ).getGoogleSupportURL( {
			path: '/analytics/answer/1032415',
			hash: 'create_or_edit_goals',
		} )
	);

	// Collection of all the data blocks to be displayed
	const dataBlocks = [
		{
			id: 'impressions',
			stat: 0,
			title: __( 'Total Impressions', 'google-site-kit' ),
			datapoint: totalImpressions,
			change: totalImpressionsChange,
		},
		{
			id: 'clicks',
			stat: 1,
			title: __( 'Total Clicks', 'google-site-kit' ),
			datapoint: totalClicks,
			change: totalClicksChange,
		},
		...( showAnalytics
			? [
					{
						id: 'visitors',
						stat: 2,
						title: __(
							'Unique Visitors from Search',
							'google-site-kit'
						),
						datapoint: analyticsVisitorsDatapoint,
						change: analyticsVisitorsChange,
					},
			  ]
			: [] ),
		...( showAnalytics &&
		dashboardType === DASHBOARD_TYPE_MAIN &&
		analyticsGoalsData?.items?.length > 0
			? [
					{
						id: 'goals',
						stat: 3,
						title: __( 'Goals', 'google-site-kit' ),
						datapoint: analyticsGoalsDatapoint,
						change: analyticsGoalsChange,
					},
			  ]
			: [] ),
		...( showAnalytics && dashboardType === DASHBOARD_TYPE_ENTITY
			? [
					{
						id: 'bounce',
						stat: 4,
						title: __( 'Bounce Rate', 'google-site-kit' ),
						datapoint: analyticsBounceDatapoint,
						change: analyticsBounceChange,
					},
			  ]
			: [] ),
	];

	const dataBlockWrapperCellProps = {
		2: halfCellProps,
		3: threeQuartersCellProps,
		4: fullCellProps,
	};

	const dataBlockCellProps = {
		2: {
			...halfCellProps,
			smSize: 2,
		},
		3: oneThirdCellProps,
		4: quarterCellProps,
	};

	return (
		<Grid>
			<Row>
				<Cell { ...dataBlockWrapperCellProps[ dataBlocks.length ] }>
					<Row>
						{ dataBlocks.map( ( dataBlock, index ) => (
							<Cell
								key={ dataBlock.id }
								{ ...dataBlockCellProps[ dataBlocks.length ] }
							>
								<DataBlock
									stat={ dataBlock.stat }
									className={ `googlesitekit-data-block--${
										dataBlock.id
									} googlesitekit-data-block--button-${
										index + 1
									}` }
									title={ dataBlock.title }
									datapoint={ dataBlock.datapoint }
									change={ dataBlock.change }
									changeDataUnit="%"
									context="button"
									selected={
										selectedStats === dataBlock.stat
									}
									handleStatSelection={ handleStatsSelection }
									gatheringData={
										isSearchConsoleGatheringData
									}
								/>
							</Cell>
						) ) }
					</Row>
				</Cell>

				{ isNavigatingToReauthURL && (
					<Cell
						{ ...halfCellProps }
						className="googlesitekit-data-block__loading"
					>
						<ProgressBar />
					</Cell>
				) }

				{ canViewSharedAnalytics &&
					( ! analyticsModuleConnected || ! analyticsModuleActive ) &&
					! isNavigatingToReauthURL && (
						<Cell { ...halfCellProps }>
							{ zeroDataStatesEnabled &&
								BREAKPOINT_SMALL !== breakpoint && (
									<ActivateAnalyticsCTA />
								) }
							{ ! zeroDataStatesEnabled &&
								( analyticsModuleActive ? (
									<CompleteModuleActivationCTA moduleSlug="analytics" />
								) : (
									<ActivateModuleCTA moduleSlug="analytics" />
								) ) }
						</Cell>
					) }

				{ canViewSharedAnalytics &&
					analyticsModuleActiveAndConnected &&
					error && (
						<Cell { ...halfCellProps }>
							<WidgetReportError
								moduleSlug="analytics"
								error={ error }
							/>
						</Cell>
					) }

				{ canViewSharedAnalytics &&
					isAnalyticsGatheringData &&
					! error &&
					! zeroDataStatesEnabled && (
						<Cell { ...halfCellProps }>
							{ /* We need to use ReportZero rather than WidgetReportZero to not associate a zero state for the whole widget. */ }
							<ReportZero moduleSlug="analytics" />
						</Cell>
					) }

				{ showAnalytics && (
					<Cell { ...quarterCellProps } smSize={ 4 }>
						{ showGoalsCTA && zeroDataStatesEnabled && (
							<CreateGoalCTA />
						) }
						{ showGoalsCTA && ! zeroDataStatesEnabled && (
							<CTA
								title={ __(
									'Use goals to measure success',
									'google-site-kit'
								) }
								description={ __(
									'Goals measure how well your site or app fulfills your target objectives',
									'google-site-kit'
								) }
								ctaLink={ supportURL }
								ctaLabel={ __(
									'Create a new goal',
									'google-site-kit'
								) }
								ctaLinkExternal
							/>
						) }
					</Cell>
				) }
			</Row>
		</Grid>
	);
};

Overview.propTypes = {
	analyticsData: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.object ),
		PropTypes.object,
	] ),
	analyticsGoalsData: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.object ),
		PropTypes.object,
	] ),
	analyticsVisitorsData: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.object ),
		PropTypes.object,
	] ),
	searchConsoleData: PropTypes.arrayOf( PropTypes.object ),
	selectedStats: PropTypes.number.isRequired,
	handleStatsSelection: PropTypes.func.isRequired,
	error: PropTypes.object,
	WidgetReportError: PropTypes.elementType.isRequired,
};

export default Overview;
