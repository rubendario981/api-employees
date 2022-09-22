import { createPool } from "mysql2/promise";
import { HOST, USER, PASSWORD, DATABASE } from "./config.js";

export const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: 3306
})