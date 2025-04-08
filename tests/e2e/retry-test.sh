#!/bin/bash

# Exit on error and propagate pipeline failures
set -e
set -o pipefail

# Initialize variables from environment or use defaults
MAX_RETRIES="${MAX_RETRIES}"
WORKSPACE_DIR="${GITHUB_WORKSPACE}"
CURRENT_ATTEMPT=1

echo "VAR: RETRY_FULL_TEST_NAME: ${RETRY_FULL_TEST_NAME}"
echo "VAR: MAX_RETRIES: ${MAX_RETRIES}"
echo "VAR: DEBUG_REDUX: ${DEBUG_REDUX}"
echo "VAR: DEBUG_NAV: ${DEBUG_NAV}"
echo "VAR: DEBUG_REST: ${DEBUG_REST}"
echo "VAR: DEBUG_TEST_RUNNER_LOGGING: ${DEBUG_TEST_RUNNER_LOGGING}"
echo "VAR: CURRENT_ATTEMPT: ${CURRENT_ATTEMPT}"

function debug_log() {
  if [[ "${DEBUG_TEST_RUNNER_LOGGING}" == "1" ]]; then
    echo "DEBUG: $1"
  fi
}

while (( CURRENT_ATTEMPT <= MAX_RETRIES )); do
    echo "VAR: CURRENT_ATTEMPT: ${CURRENT_ATTEMPT}"
    echo "TEST: Running attempt ${CURRENT_ATTEMPT} of ${MAX_RETRIES} (output will only be shown if the target test fails)..."

    output_file="${WORKSPACE_DIR}/e2e-test-results/test-output-${CURRENT_ATTEMPT}.log"
    mkdir -p "${WORKSPACE_DIR}/e2e-test-results"

    debug_log "Running tests and capturing output to ${output_file}"

    # Run tests and capture output with timestamps
    set +e  # Temporarily disable exit on error since we want to handle test failures
    # CURRENT_ATTEMPT="${CURRENT_ATTEMPT}" npm run test:e2e 2>&1 | while IFS= read -r line; do \
    npm run test:e2e 2>&1 | while IFS= read -r line; do \
        echo "[$(date '+%Y-%m-%d %H:%M:%S.%N' | cut -b1-23)] $line"; \
    done > "${output_file}"
    declare -i TEST_EXIT_STATUS=${PIPESTATUS[0]}
    set -e  # Re-enable exit on error

    debug_log "Tests completed with exit status ${TEST_EXIT_STATUS}"
    
    if (( TEST_EXIT_STATUS != 0 )); then
        # Check if the specific test failed
        if node "${WORKSPACE_DIR}/tests/e2e/check-test-result.js"; then
            echo "ERROR: Target test failed on attempt ${CURRENT_ATTEMPT}"
            echo "OUTPUT:"
            cat "${output_file}"
            exit 1
        fi
        echo "TEST: Other tests failed, continuing..."
    else
        echo "TEST: All tests passed on attempt ${CURRENT_ATTEMPT}, continuing..."
    fi

    debug_log "Incrementing CURRENT_ATTEMPT from ${CURRENT_ATTEMPT}"
    
    CURRENT_ATTEMPT=$(( CURRENT_ATTEMPT + 1 ))

    debug_log "Incremented CURRENT_ATTEMPT to ${CURRENT_ATTEMPT}"
    
    # Skip site reset on the last iteration
    if (( CURRENT_ATTEMPT <= MAX_RETRIES )); then
        # Reset the site for the next attempt
        echo "RESET: Resetting site..."
        if ! npm run env:reset-site > reset-output.log 2>&1; then
            echo "ERROR: Failed to reset site:"
            cat reset-output.log
            exit 1
        fi

        debug_log "Site reset completed"
        
        # Brief pause between attempts
        sleep 1
    fi

    debug_log "Completed iteration ${CURRENT_ATTEMPT} of ${MAX_RETRIES}"
done

echo "TEST: Reached maximum number of attempts (${MAX_RETRIES}) without test failure"
exit 0 