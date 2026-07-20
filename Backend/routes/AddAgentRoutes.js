import express from "express"
const router = express.Router();
import { addAgentController,getAllAgents } from "../controllers/addAgentController.js";

router.post("/addAgent", addAgentController);

router.get("/allagents",getAllAgents );


export default router;

