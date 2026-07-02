import express from "express"
const app = express()
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"

connectDB()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/auth", authRoutes )


const PORT = process.env.PORT || 5000


app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})