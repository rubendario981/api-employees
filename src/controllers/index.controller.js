import { pool } from '../db.js';

export const testController = async (req, res)=> {
    const [result] = await pool.query('select "Route for testing connection" as result');
    res.send(result)
}