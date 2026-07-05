import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { config } from "../config/index.js";
import { connectDB } from "../config/db.js";
import { notFound, errorHandler } from "../middlewares/errorMiddleware.js";

// Routes
import authRoutes from "../routes/authRoutes.js";
import partnerRoutes from "../routes/partnerRoutes.js";
import adminRoutes from "../routes/adminRoutes.js";
import adminManageRoutes from "../routes/adminManageRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import publicRoutes from "../routes/publicRoutes.js";
import applicationRoutes from "../routes/applicationRoutes.js";

const app = express();

// ---- Security & core middleware ----
app.use(helmet());
app.use(
  cors({
    origin: [config.clientUrl, config.adminUrl, "http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

if (config.nodeEnv === "development") app.use(morgan("dev"));

// ---- Rate limiting ----
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests, please try again later." },
});
app.use("/api", apiLimiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many auth attempts, please try later." },
});
app.use("/api/auth", authLimiter);
app.use("/api/partner", authLimiter);
app.use("/api/admin/login", authLimiter);

// ---- Health check ----
app.get("/health", (req, res) => res.json({ success: true, message: "Cavner Fintech API running", timestamp: new Date() }));

// ---- Routes ----
app.use("/api/auth", authRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/manage", adminManageRoutes);
app.use("/api/products", productRoutes);
app.use("/api/public", publicRoutes);
app.use("/api/applications", applicationRoutes);

// ---- Error handling ----
app.use(notFound);
app.use(errorHandler);

// ---- Start ----
const start = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Cavner Fintech API running on port ${config.port} [${config.nodeEnv}]`);
  });
};

start();

export default app;
