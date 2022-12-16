"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var db = require("knex")({
    client: "pg",
    connection: {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT,
    },
});
exports.default = db;
