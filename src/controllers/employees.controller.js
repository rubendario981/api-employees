import { pool } from "../db.js"

export const getEmployees = async (req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM employee")
        rows.length > 0 ? res.json(rows) : res.status(204).send({message: 'There are not employess on Database'})
        
    } catch (error) {
        res.status(500).send({message: "Internal server Error", error})
    }
}

export const getEmployee = async(req, res)=>{
    try {
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = (?)", [req.params.id])
        rows.length > 0 ? res.send(rows): res.status(404).send({message: `Employee with id ${req.params.id} does not exist`})
        
    } catch (error) {
        res.status(500).send({message: "Internal server Error", error})        
    }
}

export const createEmploye = async (req, res)=> {
    const { id, name, lastname, salary } = req.body
    try {
        const [rows] = await pool.query("INSERT INTO employee (name, lastname, salary) VALUES (?, ?, ?)", [name, lastname, salary])
        const listEmployees = await pool.query("SELECT * FROM employee")
        console.log(createEmploye, rows)
        rows && res.send({
            message: "Employee was created sucessfully with id: " + rows.insertId,
            listEmployees
        })
        
    } catch (error) {
        console.log("The user cannot be created", error)
    }
}

export const updatingEmployee = async (req, res)=> {
    const { id } = req.params;
    const { name, lastname, salary } = req.body
    try {
        const originalData = await pool.query("SELECT * FROM employee WHERE id = ?", [id])
        
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), lastname = IFNULL(?, lastname), salary = IFNULL(?, salary) WHERE id = ?", [name, lastname, salary, id])
    
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id])
    
        if(result.affectedRows === 0 ) res.status(404).send({message: "Employee not found"})
        else{
            res.send({message: "Employee was update sucessfully", originalData: originalData[0], rows})
        }
        
    } catch (error) {
        res.status(500).send({message: "Internal server Error", error})        
    }
}

export const deleteEmployee = async (req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM employee where id = ?", [req.params.id])
        result.affectedRows > 0 ? res.send({message: `Employee with id ${req.params.id} was deleted sucessfully`}): res.send({message: `Could'nt delete the required employee`})
        
    } catch (error) {
        res.status(500).send({message: "Internal server Error", error})        
    }
}