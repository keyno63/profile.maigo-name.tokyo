\connect maigowebdb;

-- Optional seed data
INSERT INTO users (id, "name")
VALUES
    ('253b9161-8586-67c6-2217-db411622bc1f', 'Demo User')
ON CONFLICT (id) DO NOTHING;
