DROP DATABASE IF EXISTS db_prueba;

CREATE DATABASE db_prueba;

USE db_prueba;

CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


