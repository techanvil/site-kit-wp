#!/bin/bash

# Exit on error
set -e

# Initialize variables from environment or use defaults
MAX_RETRIES="${MAX_RETRIES:-1000}"
WORKSPACE_DIR="${GITHUB_WORKSPACE}"
# Export CURRENT_ATTEMPT for child processes
export CURRENT_ATTEMPT=1

# Export debug flags for child processes
# export DEBUG_REDUX
# export DEBUG_NAV
# export DEBUG_REST

echo "VAR: RETRY_FULL_TEST_NAME: ${RETRY_FULL_TEST_NAME}"
echo "VAR: MAX_RETRIES: ${MAX_RETRIES}"
echo "VAR: DEBUG_REDUX: ${DEBUG_REDUX}"
echo "VAR: DEBUG_NAV: ${DEBUG_NAV}"
echo "VAR: DEBUG_REST: ${DEBUG_REST}"

while [ "${CURRENT_ATTEMPT}" -le "${MAX_RETRIES}" ]; do
    echo "VAR: CURRENT_ATTEMPT: ${CURRENT_ATTEMPT}"
    echo "TEST: Running attempt ${CURRENT_ATTEMPT} of ${MAX_RETRIES} (output will only be shown if the target test fails)..."
    
    # Run tests and capture output with timestamps
    if ! npm run test:e2e 2>&1 | \
        while IFS= read -r line; do \
            echo "[$(date '+%Y-%m-%d %H:%M:%S.%N' | cut -b1-23)] $line"; \
        done > test-output.log; then
        
        # Check if the specific test failed
        if node "${WORKSPACE_DIR}/tests/e2e/check-test-result.js"; then
            echo "ERROR: Target test failed on attempt ${CURRENT_ATTEMPT}"
            echo "OUTPUT:"
            cat test-output.log
            exit 1
        fi
        echo "TEST: Other tests failed, continuing..."
    else
        echo "TEST: All tests passed on attempt ${CURRENT_ATTEMPT}, continuing..."
    fi
    
    CURRENT_ATTEMPT=$(( CURRENT_ATTEMPT + 1 ))
    
    # Reset the site for the next attempt
    echo "RESET: Resetting site..."
    if ! npm run env:reset-site > reset-output.log 2>&1; then
        echo "ERROR: Failed to reset site:"
        cat reset-output.log
        exit 1
    fi
    
    # Brief pause between attempts
    sleep 1
done

echo "TEST: Reached maximum number of attempts (${MAX_RETRIES}) without test failure"
exit 0 