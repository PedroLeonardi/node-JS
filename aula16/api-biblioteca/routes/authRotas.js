import express from 'express';
import { loginController } from '../controllers/AuthController.js';
import {authMiddleware} from '../middlewares/authMiddlewere.js'
const router = express.Router();

router.post("/login", loginController);

export default router;
