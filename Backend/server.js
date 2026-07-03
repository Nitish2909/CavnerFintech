import express from "express"
const app = express()
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import loanApplicationRoutes from "./routes/loanApplicationRoutes.js"
connectDB()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use("/api/auth", authRoutes )
app.use("/api/loan", loanApplicationRoutes )



const PORT = process.env.PORT || 3000


app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})