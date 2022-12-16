import "dotenv/config";
import { Knex } from "knex";

const db: Knex = require("knex")({
  client: "pg",
  connection: {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  },
});
export default db;
