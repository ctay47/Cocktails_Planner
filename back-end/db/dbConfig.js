const pgp = require('pg-promise')();
require('dotenv').config();
const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;

const cn = DATABASE_URL
  ? {
    connectionString: DATABASE_URL,
    max: 30,
    ssl: {
      rejectUnauthorized: false,
    },
  }
  : {

    PG_HOST=ec2-3-224-184-9.compute-1.amazonaws.com
    PG_PORT=5432
    PG_DATABASE=d2284aahqrgtnt
    PG_USER = icoyudxeotdvgb



const db = pgp(cn);

module.exports = db;
