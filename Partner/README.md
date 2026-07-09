# Cavner Fintech - Admin Frontend

The admin control panel for Cavner Wealth & Fintech — manages users, partners, loan/credit card applications, products, and customer messages.

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3** for styling
- **Redux Toolkit** for state management
- **React Router v7** for routing
- **Axios** for API calls
- **Recharts** for dashboard charts
- **lucide-react** for icons

## Project Structure

```
admin-frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── ProtectedRoute.jsx  # Admin auth guard
│   │   ├── StatusBadge.jsx     # Status pill component
│   │   ├── Pagination.jsx      # Pagination controls
│   │   └── Modal.jsx           # Reusable modal
│   ├── pages/
│   │   ├── Login.jsx           # Admin login
│   │   ├── Dashboard.jsx       # Stats + charts
│   │   ├── Users.jsx           # Manage users
│   │   ├── Partners.jsx         # Approve/manage partners
│   │   ├── LoanApplications.jsx # Review loan applications
│   │   ├── CardApplications.jsx # Review card applications
│   │   ├── LoanProducts.jsx     # CRUD loan products
│   │   ├── CreditCards.jsx      # CRUD credit cards
│   │   └── Messages.jsx        # Contact messages
│   ├── services/
│   │   ├── api.js              # Axios instance
│   │   └── adminService.js    # All admin API calls
│   ├── store/
│   │   └── index.js            # Redux store (admin auth)
│   ├── App.jsx                 # Routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind
├── index.html
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
   Runs on `http://localhost:5174`

4. **Build for production**
   ```bash
   npm run build
   ```

## Default Admin Credentials

After running the backend seed script:
- **Email**: `admin@cavnerfintech.in`
- **Password**: `Admin@123`

## Features

### Dashboard
- Total users, partners, applications, messages count
- Loan application status breakdown (pie chart)
- Application counts (bar chart)
- Total disbursed amount
- Pending partner approvals

### User Management
- Search users by name, email, phone
- Filter by status (active/blocked)
- View user details
- Block/unblock users

### Partner Management
- View all partners (DSA, NBFC, agents)
- Approve pending partner registrations
- Reject partners
- Block/unblock partners
- View partner stats (leads, commission)

### Loan Applications
- View all loan applications with filters
- View detailed application (personal info, documents, loan details)
- Update status (pending → under_review → approved → rejected → disbursed)
- Set approved amount
- Add admin notes
- View uploaded documents (links to Cloudinary)

### Credit Card Applications
- View all card applications
- Update status inline

### Product Management
- **Loan Products**: Create, edit, delete loan products with SEO fields
- **Credit Cards**: Create, edit, delete credit card offerings with SEO fields
- Set interest rates, amounts, tenure, eligibility, documents, features, partner banks

### Contact Messages
- View customer queries
- Reply to messages
- Mark as resolved

## API Integration

Connects to the backend at `VITE_API_URL` (default: `http://localhost:3000/api`). The Vite dev server proxies `/api` to the backend.

The Axios instance automatically:
- Attaches the admin JWT token from localStorage
- Redirects to login on 401 responses

## Security

- `noindex, nofollow` meta tag (admin panel should not be indexed)
- JWT-based authentication
- Protected routes via `ProtectedRoute` component
- Token stored in localStorage with httpOnly cookie backup from backend

## Design

- Dark sidebar with light content area
- Blue/brand accent color
- Responsive (mobile drawer sidebar, desktop fixed sidebar)
- Data tables with pagination
- Modal dialogs for detailed views
- Charts via Recharts
