import express, {Request, Response, NextFunction } from "express" 
import * as controller from "../controllers/ClientController";
const router = express.Router();

router.post("/login", controller.Login)
router.post("/register", controller.Register)
router.get("/token", controller.GetJWT)

export default router;