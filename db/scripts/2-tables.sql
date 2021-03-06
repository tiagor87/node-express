CREATE TABLE general.users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    create_date TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP),
    delete_date TIMESTAMP
)