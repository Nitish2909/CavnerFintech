import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
import { auth } from "./middleware/authMiddleware.js"

connectDB()

app.use(express.json);
app.use(express.urlencoded({ extended: true }))

app.post("/api/auth", auth, authRoutes )


const PORT = process.env.PORT || 5000


app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})