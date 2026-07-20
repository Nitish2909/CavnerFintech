import api from "./api";

// export const partnerLogin = (data) => api.post("/login", data);
// export const partnerLogout = () => api.post("/logout");
// export const getPartnerProfile = () => api.get("/profile");


// Employee

export const addEmployee = (data) => api.post("/employee/addEmployee", data,
    {
        headers: { "Content-Type": "multipart/form-data" }
    });


export const getAllEmployees = () => api.get("/employee/getAllEmployees");


//Agents

export const addAgent = (data) => api.post("/agent/addAgent", data,{
      headers: { "Content-Type": "multipart/form-data" }
});


export const getAllAgents = () => api.get("/agent/getAllAgents");




// export const getUsers = (params) => api.get("/partner/manage/users", { params });
// export const getUserById = (id) => api.get(`/partner/manage/users/${id}`);
// export const updateUserStatus = (id, status) => api.put(`/partner/manage/users/${id}/status`, { status });

// export const getPartners = (params) => api.get("/partner/manage/partners", { params });
// export const approvePartner = (id) => api.put(`/partner/manage/partners/${id}/approve`);
// export const rejectPartner = (id) => api.put(`/partner/manage/partners/${id}/reject`);
// export const updatePartnerStatus = (id, status) => api.put(`/partner/manage/partners/${id}/status`, { status });

// export const getLoanApplications = (params) => api.get("/partner/manage/loan-applications", { params });
// export const updateLoanApplicationStatus = (id, data) => api.put(`/partner/manage/loan-applications/${id}/status`, data);

// export const getCreditCardApplications = (params) => api.get("/partner/manage/credit-card-applications", { params });
// export const updateCreditCardApplicationStatus = (id, data) => api.put(`/partner/manage/credit-card-applications/${id}/status`, data);

// export const getLoanProducts = () => api.get("/products/loans");
// export const createLoanProduct = (data) => api.post("/products/loans", data);
// export const updateLoanProduct = (id, data) => api.put(`/products/loans/${id}`, data);
// export const deleteLoanProduct = (id) => api.delete(`/products/loans/${id}`);

// export const getCreditCards = () => api.get("/products/credit-cards");
// export const createCreditCard = (data) => api.post("/products/credit-cards", data);
// export const updateCreditCard = (id, data) => api.put(`/products/credit-cards/${id}`, data);
// export const deleteCreditCard = (id) => api.delete(`/products/credit-cards/${id}`);

// export const getContactMessages = () => api.get("/partner/manage/contact-messages");
// export const resolveContactMessage = (id, data) => api.put(`/partner/manage/contact-messages/${id}`, data);
