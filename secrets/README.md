Place secret files in this directory and keep them out of version control.

- `postgres_password.txt`: contains the database password used for both the Postgres superuser (`POSTGRES_PASSWORD_FILE`) and backend (`DATABASE_PASSWORD_FILE`). Create this file manually and add the desired password (e.g., `hogehoge`). The file is ignored via `.gitignore`.
  - If you prefer to keep the secret somewhere else, point `POSTGRES_PASSWORD_SECRET_FILE` (in `.env` or your shell) to the absolute path of the file before running `docker compose up`.
