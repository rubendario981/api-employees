import { Router } from "express";
import {createEmploye, deleteEmployee, getEmployee, getEmployees, updatingEmployee} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees)

router.get("/employee/:id", getEmployee)

router.post("/employees", createEmploye)

router.patch("/employee/:id", updatingEmployee)

router.delete("/employee/:id", deleteEmployee)

export default router;