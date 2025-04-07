#!/bin/bash

# Exit on error
set -e

# Initialize variables from environment or use defaults
CURRENT_ATTEMPT="${ATTEMPT:-1}"
MAX_RETRIES="${MAX_RETRIES:-1000}"
WORKSPACE_DIR="${GITHUB_WORKSPACE}"

# Debug flags
DEBUG_FLAGS=""
[ "${DEBUG_REDUX}" = "1" ] && DEBUG_FLAGS="${DEBUG_FLAGS} DEBUG_REDUX=1"
[ "${DEBUG_NAV}" = "1" ] && DEBUG_FLAGS="${DEBUG_FLAGS} DEBUG_NAV=1"
[ "${DEBUG_REST}" = "1" ] && DEBUG_FLAGS="${DEBUG_FLAGS} DEBUG_REST=1"

while [ "${CURRENT_ATTEMPT}" -le "${MAX_RETRIES}" ]; do
    echo "Attempt ${CURRENT_ATTEMPT} of ${MAX_RETRIES} (output will only be shown if the target test fails)..."
    
    # Run tests and capture output with timestamps
    if ! CURRENT_ATTEMPT="${CURRENT_ATTEMPT}" \
        ${DEBUG_FLAGS} \
        npm run test:e2e 2>&1 | \
        while IFS= read -r line; do \
            echo "[$(date '+%Y-%m-%d %H:%M:%S.%N' | cut -b1-23)] $line"; \
        done > test-output.log; then
        
        # Check if the specific test failed
        if node "${WORKSPACE_DIR}/tests/e2e/check-test-result.js"; then
            echo "Target test failed on attempt ${CURRENT_ATTEMPT}"
            echo "Test output:"
            cat test-output.log
            exit 1
        fi
        echo "Other tests failed, continuing..."
    else
        echo "All tests passed on attempt ${CURRENT_ATTEMPT}, continuing..."
    fi
    
    CURRENT_ATTEMPT=$(( CURRENT_ATTEMPT + 1 ))
    echo "Resetting site..."
    if ! npm run env:reset-site > reset-output.log 2>&1; then
        echo "Error resetting site:"
        cat reset-output.log
        exit 1
    fi
    sleep 1
done

echo "Reached maximum number of retries (${MAX_RETRIES}) without test failure"
exit 0 