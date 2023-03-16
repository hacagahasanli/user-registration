import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { check, validationResult } from "express-validator";

const router = new Router();

router.post('/registration', async (req, res) => {

})

export default router