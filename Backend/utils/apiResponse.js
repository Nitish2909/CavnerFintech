export class ApiError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export const sendResponse = (res, status, message, data = null) =>
  res.status(status).json({ success: true, message, data });

export const sendError = (res, status, message, errors = null) =>
  res.status(status).json({ success: false, message, errors });
