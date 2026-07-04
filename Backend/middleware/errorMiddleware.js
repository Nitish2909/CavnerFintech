import { config } from "../config/index.js";
import { ApiError } from "../utils/apiResponse.js";

// 404 handler
export const notFound = (req, res, next) => {
  next(new ApiError(`Route not found: ${req.originalUrl}`, 404));
};

// Global error handler
export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (config.nodeEnv === "development" && statusCode === 500) {
    console.error(err.stack);
  }

  // Multer errors
  if (err.name === "MulterError") {
    statusCode = 400;
    if (err.code === "LIMIT_FILE_SIZE") message = "File too large (max 10MB)";
    else message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: err.isOperational ? err.errors : undefined,
    stack: config.nodeEnv === "development" ? err.stack : undefined,
  });
};
