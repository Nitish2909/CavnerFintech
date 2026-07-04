# Cavner Fintech - Complete Backend

A production-grade Node.js + Express.js backend API for the Cavner Wealth & Fintech platform — an Indian fintech application offering loans, credit cards, investments, and corporate finance services.

## Tech Stack

- **Runtime**: Node.js (ES6 modules)
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **File Storage**: Cloudinary (v2) for PDF/document uploads
- **Authentication**: JWT (separate secrets for users, admins, partners)
- **Password Hashing**: bcryptjs
- **Email OTP**: Resend
- **Phone OTP**: MSG91 (popular Indian OTP/SMS provider)
- **Validation**: express-validator
- **Security**: Helmet, CORS, express-rate-limit, httpOnly cookies

## Project Structure

```
complete-backend/
├── config/
│   ├── index.js          # Environment config
│   ├── db.js             # MongoDB connection
│   └── cloudinary.js     # Cloudinary config
├── controllers/
│   ├── authController.js       # User auth + OTP
│   ├── partnerController.js    # Partner auth + leads
│   ├── adminController.js      # Admin auth
│   ├── adminManageController.js # Admin management
│   ├── productController.js    # CRUD products (admin)
│   ├── publicController.js     # Public product listing
│   └── applicationController.js # Loan/card applications + contact
├── middlewares/
│   ├── authMiddleware.js      # User JWT guard
│   ├── adminMiddleware.js     # Admin JWT guard
│   ├── partnerMiddleware.js   # Partner JWT guard
│   ├── uploadMiddleware.js    # Multer file upload
│   ├── validate.js            # express-validator runner
│   └── errorMiddleware.js     # 404 + global error handler
├── models/
│   ├── User.js, Partner.js, Admin.js
│   ├── LoanProduct.js, CreditCard.js
│   ├── LoanApplication.js, CreditCardApplication.js
│   ├── Otp.js, ContactMessage.js, PartnerLead.js
├── routes/
│   ├── authRoutes.js, partnerRoutes.js, adminRoutes.js
│   ├── adminManageRoutes.js, productRoutes.js
│   ├── publicRoutes.js, applicationRoutes.js
├── utils/
│   ├── jwt.js, otp.js, apiResponse.js
│   ├── emailService.js (Resend)
│   ├── smsService.js (MSG91)
│   └── cloudinaryUpload.js
├── validators/
│   ├── authValidators.js, partnerValidators.js
│   ├── applicationValidators.js, adminValidators.js
├── src/
│   ├── server.js    # App entry point
│   └── seed.js      # Seed admin + sample products
├── uploads/         # Temp file storage (auto-cleaned)
├── .env.example
└── package.json
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI, Cloudinary, Resend, MSG91 keys
   ```

3. **Seed the database** (creates default admin + sample loan/credit card products)
   ```bash
   node src/seed.js
   ```
   Default admin: `admin@cavnerfintech.in` / `Admin@123`

4. **Start the server**
   ```bash
   npm run dev    # development (nodemon)
   npm start      # production
   ```
   Server runs on `http://localhost:3000`

## Key Features

### Authentication
- User registration with **email + phone OTP verification** (Resend for email, MSG91 for phone)
- Password-based login with JWT
- OTP-based login
- Separate auth for Admins and Partners (DSA/NBFC/Agents)
- httpOnly cookies + Bearer token support

### OTP Flow
1. `POST /api/auth/send-otp` — sends OTP to email or phone
2. `POST /api/auth/verify-otp` — verifies the OTP
3. `POST /api/auth/register` — requires both email & phone verified

### Security
- Helmet for HTTP headers
- Rate limiting (general + auth-specific)
- bcrypt password hashing
- JWT in httpOnly cookies
- Input validation via express-validator
- File type/size restrictions on uploads
- Temporary files deleted after Cloudinary upload

### Cloudinary Uploads
- Loan application documents (PAN, Aadhaar, salary slip, bank statement) uploaded to Cloudinary
- Temporary files are **automatically deleted** after upload (success or failure)

## API Endpoints

### Auth (`/api/auth`)
| Method | Path | Description |
|--------|------|-------------|
| POST | `/send-otp` | Send OTP to email/phone |
| POST | `/verify-otp` | Verify OTP |
| POST | `/register` | Register user (requires verified OTP) |
| POST | `/login` | Login with email/password |
| POST | `/login-otp` | Login with OTP |
| GET | `/me` | Get current user |
| PUT | `/profile` | Update profile |
| POST | `/logout` | Logout |

### Partner (`/api/partner`)
| Method | Path | Description |
|--------|------|-------------|
| POST | `/send-otp` | Send partner OTP |
| POST | `/verify-otp` | Verify partner OTP |
| POST | `/register` | Register partner |
| POST | `/login` | Partner login |
| GET | `/profile` | Partner profile |
| GET | `/dashboard` | Partner dashboard stats |
| POST | `/leads` | Create a lead |
| GET | `/leads` | List partner leads |

### Admin (`/api/admin`)
| Method | Path | Description |
|--------|------|-------------|
| POST | `/login` | Admin login |
| GET | `/profile` | Admin profile |
| POST | `/logout` | Logout |

### Admin Management (`/api/admin/manage`)
- Dashboard stats, user management, partner approval, loan/card application review, contact messages

### Public (`/api/public`)
- List and get loan products & credit cards by slug

### Products (`/api/products`) — Admin only
- CRUD for loan products and credit cards

### Applications (`/api/applications`)
- Apply for loan (with document upload), apply for credit card, get user's applications, contact us

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default 3000) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | User JWT secret |
| `ADMIN_JWT_SECRET` | Admin JWT secret |
| `PARTNER_JWT_SECRET` | Partner JWT secret |
| `CLOUDINARY_*` | Cloudinary credentials |
| `RESEND_API_KEY` | Resend email API key |
| `MSG91_AUTH_KEY` | MSG91 SMS API key |
| `MSG91_SENDER_ID` | MSG91 sender ID |
| `MSG91_TEMPLATE_ID` | MSG91 OTP template ID |

## Notes

- If Resend/MSG91 keys are not configured, OTPs are logged to the console in development mode for testing.
- The OTP model has a TTL index — expired OTPs are automatically removed by MongoDB.
- All passwords are hashed with bcrypt (10 salt rounds).
- The backend serves both the user-frontend and admin-frontend via CORS configuration.
