# Full-stack Portfolio Project

[FRONT END DEPLOYMENT](https://preeminent-monstera-58fcc3.netlify.app/)
[BACK END DEPLOYMENT](https://evening-everglades-60683.herokuapp.com/)

## Cocktail Menu Planner

- The Cocktail Menu is an app where a user can create a menu of cocktails.
- The user can search for cocktails by ingredients and name.
- The user can then add cocktails to a menu table.
- The user can see the details of each drink and instructions on how to make them.
- The user can add, edit, or delete information from the menu.

## Getting Started

- Create a new repository
- clone this repo
- navigate to your Desktop or other convenient folder
- git status to make sure you are not already in a git repository

## backend
- `mkdir back-end`
- `cd back-end`
- `touch .gitignore`
```
node_modules
.env
.DS_Store
```
- `git init`
- `git add .`
- `git commit -m 'first commit'
- `touch server.js`
- `npm init -y` (this will automatically say yes to all the npm default settings - this is fine for tutorials, small test builds, etc.)
- `touch app.js .env`
- `npm install express dotenv cors`

- make sure you are on the same level as the `package.json` of the `back-end` directory

- add to scripts `package.json` "
`"db:init": "psql -U postgres -f db/schema.sql"` 
`"db:seed": "psql -U postgres -f db/seed.sql"`

- .env
```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""
```

## frontend
- `mkdir front-end`
- `cd front-end`
- `npm install`
- `touch .env`

- .env
- `npm install`
- `touch .env`

make sure you are on the same level as the `package.json` of the `back-end` directory

- `touch .env`

`REACT_APP_API_URL=http://localhost:3003`


