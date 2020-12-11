CREATE DATABASE Reviews;

CREATE TABLE Reviewed (
    ID SERIAL PRIMARY KEY,
    movie_title varchar NOT NULL,
    review varchar NOT NULL,
    review_date varchar NOT NULL,
);
