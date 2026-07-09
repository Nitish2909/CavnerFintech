import express from "express";
import {addEmployeeController, getEmployeeController} from "../controllers/addEmployeeController";
const router= express.Router();

router.post("/addEmployee", addEmployeeController);

router.get("/getAllEmployees", getEmployeeController);

export default router;