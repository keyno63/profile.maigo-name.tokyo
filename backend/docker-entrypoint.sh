#!/bin/sh
set -e

# Allow secrets to be provided as files
if [ -z "${DATABASE_PASSWORD:-}" ] && [ -n "${DATABASE_PASSWORD_FILE:-}" ] && [ -f "${DATABASE_PASSWORD_FILE}" ]; then
  DATABASE_PASSWORD="$(cat "${DATABASE_PASSWORD_FILE}")"
  export DATABASE_PASSWORD
fi

exec /opt/java/openjdk/bin/java -jar /opt/profile-backend.jar "$@"
