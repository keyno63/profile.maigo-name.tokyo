\connect maigowebdb;

CREATE TABLE IF NOT EXISTS users (
    id         TEXT PRIMARY KEY,
    "name"     TEXT        NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS authentication (
    user_id         TEXT        PRIMARY KEY,
    hashed_password TEXT        NOT NULL,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_auth_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS health (
    user_id     TEXT        NOT NULL,
    "date"      INTEGER     NOT NULL,
    weight_kg   NUMERIC(5,2),
    kilocalorie INTEGER     NOT NULL,
    "status"    TEXT        NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT pk_health PRIMARY KEY (user_id, recorded_at),
    CONSTRAINT fk_health_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
    CONSTRAINT fk_status
        FOREIGN KEY ("status") REFERENCES "status"("value")
);

CREATE TABLE IF NOT EXISTS "status" (
    id   INTEGER         PRIMARY KEY,
    "value"    TEXT        NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);