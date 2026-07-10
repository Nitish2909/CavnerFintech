import express from "express";
import {addEmployeeController, getAllEmployees} from "../controllers/addEmployeeController.js";
const router= express.Router();

router.post("/addEmployee", addEmployeeController);

router.get("/getAllEmployees", getAllEmployees);

export default router;