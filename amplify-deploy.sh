#!/usr/bin/env bash

set -uex

APPID=dcmrmd4rws3k7
BRANCH=prod

cd dist


ZIP=$(mktemp -u)-deploy.zip

zip -r1 "$ZIP" .

read -r JOB_ID ZIP_URL < <(
    aws amplify create-deployment --app-id "$APPID" --branch-name "$BRANCH" |
    jq -r '.jobId+" "+.zipUploadUrl'
)

curl -T "$ZIP" "$ZIP_URL"

aws amplify start-deployment --app-id "$APPID" --branch-name "$BRANCH" --job-id "$JOB_ID"
