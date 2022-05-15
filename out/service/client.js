"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let psd = 'postgres://postgres:12345@127.0.0.1:5432/postgres';
let client = new pg_1.Pool({
    connectionString: psd
});
client.connect((err) => {
    console.log(err ? err : 'Database is start');
});
exports.default = client;
