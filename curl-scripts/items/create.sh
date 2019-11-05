#!/bin/bash

API="http://localhost:4741"
URL_PATH="/items"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "item": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "location": "'"${LOCATION}"'",
      "cost": "'"${COST}"'",
      "importance": "'"${IMPORTANCE}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

echo
