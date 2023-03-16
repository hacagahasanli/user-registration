import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { check, validationResult } from "express-validator";

const router = new Router();

router.post('/registration', async (req, res) => {
    try {

        const { email, password } = req.body;
        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: `User with email ${email} already exists ` })
        }

        const hashPassword = await bcrypt.hash(password, 15);
        const user = new User({ email, password: hashPassword });
        await user.save();
        return res.json({ message: "User was created" })
    } catch (err) {
        res.send({ message: "Server error" })
    }
})

export default router