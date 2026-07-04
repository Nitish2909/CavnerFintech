import api from "./api";

// Auth
export const sendOtp = (data) => api.post("/auth/send-otp", data);
export const verifyOtp = (data) => api.post("/auth/verify-otp", data);
export const register = (data) => api.post("/auth/register", data);
export const login = (data) => api.post("/auth/login", data);
export const getMe = () => api.get("/auth/me");
export const updateProfile = (data) => api.put("/auth/profile", data);
export const logout = () => api.post("/auth/logout");

// Partner
export const sendPartnerOtp = (data) => api.post("/partner/send-otp", data);
export const verifyPartnerOtp = (data) => api.post("/partner/verify-otp", data);
export const registerPartner = (data) => api.post("/partner/register", data);
export const loginPartner = (data) => api.post("/partner/login", data);
export const getPartnerProfile = () => api.get("/partner/profile");
export const getPartnerDashboard = () => api.get("/partner/dashboard");
export const createLead = (data) => api.post("/partner/leads", data);
export const getMyLeads = (params) => api.get("/partner/leads", { params });

// Public products
export const getLoanProducts = (params) => api.get("/public/loans", { params });
export const getLoanProductBySlug = (slug) => api.get(`/public/loans/${slug}`);
export const getCreditCards = (params) => api.get("/public/credit-cards", { params });
export const getCreditCardBySlug = (slug) => api.get(`/public/credit-cards/${slug}`);

// Applications
export const applyLoan = (formData) =>
  api.post("/applications/loan", formData, { headers: { "Content-Type": "multipart/form-data" } });
export const applyCreditCard = (data) => api.post("/applications/credit-card", data);
export const getMyApplications = () => api.get("/applications/my-applications");
export const contactUs = (data) => api.post("/applications/contact", data);
