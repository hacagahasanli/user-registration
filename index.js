import express from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import router from "./routes/index.js"
config()

const app = express()
const PORT = 5001;
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.cd6amzr.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => {
            console.log("SERVER HAS STARTED ON ");
        })
    } catch (err) {
        console.log(err)
    }
}

start()