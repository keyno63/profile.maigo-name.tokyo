-- Additional bootstrap commands are kept separate from schema/data.
\connect maigowebdb;

-- Synchronize the application role's password with the Docker secret so that
-- LOGIN PASSWORD is never hard-coded in this repository.
CREATE TEMP TABLE app_role_password(value text);
COPY app_role_password FROM PROGRAM 'cat /run/secrets/postgres_password';
DO $$
DECLARE
    role_password text;
BEGIN
    SELECT trim(value) INTO role_password FROM app_role_password LIMIT 1;

    IF role_password IS NULL OR role_password = '' THEN
        RAISE EXCEPTION 'postgres_password secret is missing or empty';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'keyno63') THEN
        EXECUTE format('CREATE ROLE %I LOGIN PASSWORD %L', 'keyno63', role_password);
    ELSE
        EXECUTE format('ALTER ROLE %I WITH PASSWORD %L', 'keyno63', role_password);
    END IF;
END
$$;
DROP TABLE app_role_password;

-- Ensure default schema ownership matches application role.
ALTER SCHEMA public OWNER TO keyno63;
GRANT ALL ON SCHEMA public TO keyno63;
