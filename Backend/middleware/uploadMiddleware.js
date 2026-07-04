import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /pdf|jpg|jpeg|png|webp/;
  const ext = path.extname(file.originalname).toLowerCase().replace(".", "");
  if (allowed.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, JPEG, PNG, WEBP files are allowed"), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

export const uploadFields = upload.fields([
  { name: "panCard", maxCount: 1 },
  { name: "aadhaar", maxCount: 1 },
  { name: "salarySlip", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "documents", maxCount: 10 },
]);
