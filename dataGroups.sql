CREATE TYPE permission AS ENUM ('READ', 'WRITE', 'DELETE', 'SHARE','UPLOAD_FILES');

CREATE TABLE groups (id BIGSERIAL NOT NULL PRIMARY KEY, name VARCHAR(50) NOT NULL, permissions permission[]);

INSERT INTO groups (name, permissions)
VALUES ('Java basic', ARRAY['READ', 'WRITE']::permission[]),
('Phyton advanced', ARRAY['READ', 'SHARE']::permission[]),
('NodeJS crash course', ARRAY['READ', 'WRITE', 'DELETE']::permission[]),
('Javascript/React', ARRAY['READ']::permission[]),
('NodeJS in AWS', ARRAY['READ', 'SHARE', 'UPLOAD_FILES']::permission[]),
('Business English', ARRAY['READ']::permission[]);
