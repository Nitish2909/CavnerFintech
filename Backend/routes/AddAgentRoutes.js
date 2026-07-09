import express from "express"
const router = express.Router();
import AddAgentController from "../controllers/addAgentController.js";
import getAllAgents from "../controllers/addAgentController.js";

router.post("/addAgent", AddAgentController);

router.get("/getAllAgents", AddAgentController);


export default router;

