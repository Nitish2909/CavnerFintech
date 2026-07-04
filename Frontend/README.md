# Cavner Fintech - User Frontend

The customer-facing web application for Cavner Wealth & Fintech — an Indian fintech platform offering loans, credit cards, investments, and corporate finance services.

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3** for styling
- **Redux Toolkit** for state management
- **React Router v7** for routing
- **Axios** for API calls
- **react-helmet-async** for SEO
- **lucide-react** for icons

## Project Structure

```
user-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with dropdowns
│   │   ├── SiteFooter.jsx      # Footer
│   │   ├── Whatsapp.jsx        # Floating WhatsApp button
│   │   ├── Seo.jsx             # SEO meta tags manager
│   │   ├── EmiCalculator.jsx   # EMI calculator widget
│   │   ├── ProtectedRoute.jsx  # Auth guard
│   │   └── InfoPage.jsx        # Generic info page template
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # User login
│   │   ├── Register.jsx        # Registration with OTP
│   │   ├── PartnerLogin.jsx    # Partner login
│   │   ├── PartnerRegisteration.jsx  # Partner registration with OTP
│   │   ├── PartnerDashboard.jsx     # Partner dashboard
│   │   ├── ApplyLoan.jsx       # Loan application form
│   │   ├── CreditCardPage.jsx  # Credit card listings
│   │   ├── EMICalculator.jsx   # EMI calculator page
│   │   ├── CheckCibilScore.jsx # CIBIL score checker
│   │   ├── ContactUs.jsx        # Contact form
│   │   ├── BecomePartner.jsx   # Partner program landing
│   │   ├── loans/
│   │   │   └── Loans.jsx       # Loan list + detail (by slug)
│   │   └── Users/
│   │       ├── Dashboard.jsx   # User dashboard
│   │       └── Profile.jsx     # User profile
│   ├── services/
│   │   ├── api.js              # Axios instance with interceptors
│   │   └── apiService.js       # All API call functions
│   ├── store/
│   │   └── index.js            # Redux store (auth slice)
│   ├── utils/
│   ├── App.jsx                 # Routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + global styles
├── index.html                  # SEO meta + structured data
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Set VITE_API_URL to your backend URL
   ```

3. **Run dev server**
   ```bash
   npm run dev
   ```
   Runs on `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## Features

### User Features
- **Registration with OTP verification** — email OTP (via Resend) and phone OTP (via MSG91)
- **Login** with email/password
- **Dashboard** — view loan & credit card applications, stats, quick actions
- **Profile** — view and update personal details
- **Logout**
- **Apply for loans** with document upload (PAN, Aadhaar, salary slip, bank statement)
- **Browse credit cards** and apply
- **EMI Calculator** — interactive slider-based calculator
- **Check CIBIL Score**
- **Contact Us** form

### Partner Features
- **Partner Registration** with OTP verification (email + phone)
- **Partner Login** (requires admin approval)
- **Partner Dashboard** — view leads, commissions, stats
- **Create Leads** — add new customer leads
- **View Leads** — track lead status

### SEO
- Per-page meta tags via `react-helmet-async` (title, description, keywords, canonical)
- Open Graph & Twitter Card tags
- JSON-LD structured data in `index.html`
- Semantic HTML structure
- Sitemap-friendly URLs

### Design
- Teal/brand color scheme (no purple)
- Responsive (mobile, tablet, desktop)
- Sticky header with dropdown navigation
- Floating WhatsApp button
- Smooth transitions and hover states
- Inter font family

## API Integration

The frontend connects to the backend at `VITE_API_URL` (default: `http://localhost:3000/api`). The Vite dev server proxies `/api` to the backend.

All API calls are in `src/services/apiService.js`. The Axios instance (`src/services/api.js`) automatically:
- Attaches the JWT token from localStorage
- Handles 401 responses by clearing auth state

## Authentication Flow

1. User registers → email OTP → phone OTP → account created → JWT stored
2. User logs in → JWT stored in localStorage + Redux
3. Protected routes check for token via `ProtectedRoute`
4. Logout clears token and redirects home

## Notes

- The app uses Redux Toolkit for auth state (user + partner).
- Both user and partner auth are managed in the same store with separate slices.
- The Vite proxy forwards `/api` requests to the backend during development.
