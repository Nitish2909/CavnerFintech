// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     admin: JSON.parse(localStorage.getItem("admin") || "null"),
//     token: localStorage.getItem("adminToken") || null,
//   },
//   reducers: {
//     setAdmin: (state, action) => {
//       state.admin = action.payload.admin;
//       state.token = action.payload.token;
//       localStorage.setItem("admin", JSON.stringify(action.payload.admin));
//       localStorage.setItem("adminToken", action.payload.token);
//     },
//     logout: (state) => {
//       state.admin = null;
//       state.token = null;
//       localStorage.removeItem("admin");
//       localStorage.removeItem("adminToken");
//     },
//   },
// });

// export const { setAdmin, logout } = authSlice.actions;

// export const store = configureStore({
//   reducer: { auth: authSlice.reducer },
// });
