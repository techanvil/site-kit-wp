<?php
/**
 * Class Google\Site_Kit\Core\Util\REST_Response_Logger
 *
 * @package   Google\Site_Kit\Core\Util
 * @copyright 2024 Google LLC
 * @license   https://www.apache.org/licenses/LICENSE-2.0 Apache License 2.0
 * @link      https://sitekit.withgoogle.com
 */

namespace Google\Site_Kit\Core\Util;

use WP_REST_Response;

/**
 * Class for logging REST API responses to a separate file.
 *
 * @since 1.0.0
 * @access private
 * @ignore
 */
class REST_Response_Logger {

	/**
	 * The log file path.
	 *
	 * @since 1.0.0
	 * @var string
	 */
	private $log_file;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		// Set the log file path in the uploads directory.
		$upload_dir     = wp_upload_dir();
		$this->log_file = $upload_dir['basedir'] . '/site-kit-rest-responses.log';
	}

	/**
	 * Registers the REST response logging functionality.
	 *
	 * @since 1.0.0
	 */
	public function register() {
		add_filter( 'rest_pre_echo_response', array( $this, 'log_rest_response' ), 10, 3 );
	}

	/**
	 * Logs the REST response to a separate file.
	 *
	 * @since 1.0.0
	 *
	 * @param mixed           $result  Response to send to the client.
	 * @param WP_REST_Server  $server  Server instance.
	 * @param WP_REST_Request $request Request used to generate the response.
	 * @return mixed Unmodified response.
	 */
	public function log_rest_response( $result, $server, $request ) {
		// Only log if the request is from the Site Kit REST API.
		if ( strpos( $request->get_route(), '/google-site-kit/v1' ) === 0 ) {
			$log_entry = array(
				'timestamp' => current_time( 'mysql' ),
				'route'     => $request->get_route(),
				'method'    => $request->get_method(),
				'response'  => $result,
			);

			// Format the log entry as JSON.
			$log_line = wp_json_encode( $log_entry ) . "\n";

			// Write to the log file.
			error_log( $log_line, 3, $this->log_file ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		}

		return $result;
	}
}
