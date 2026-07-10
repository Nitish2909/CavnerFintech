import express from "express"
const router = express.Router();
import {AddAgentController} from "../controllers/addAgentController.js";
import {getAllAgents} from "../controllers/addAgentController.js";

router.post("/addAgent", AddAgentController);

router.get("/getAllAgents",getAllAgents );


export default router;

