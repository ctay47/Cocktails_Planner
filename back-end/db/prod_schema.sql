DROP TABLE IF EXISTS menus;

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