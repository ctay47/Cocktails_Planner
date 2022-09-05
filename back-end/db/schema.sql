DROP DATABASE IF EXISTS cocktail_planner;
CREATE DATABASE cocktail_planner;

\c cocktail_planner;

CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    info TEXT,
    glass TEXT,
    instructions TEXT,
    ingredients TEXT,
    is_favorite BOOLEAN 
);
