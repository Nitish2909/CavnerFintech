import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    partner: JSON.parse(localStorage.getItem("partner") || "null"),
    token: localStorage.getItem("partnerToken") || null,
  },
  reducers: {
    setPartner: (state, action) => {
      state.partner = action.payload.partner;
      state.token = action.payload.token;
      localStorage.setItem("partner", JSON.stringify(action.payload.partner));
      localStorage.setItem("partnerToken", action.payload.token);
    },
    logout: (state) => {
      state.partner = null;
      state.token = null;
      localStorage.removeItem("partner");
      localStorage.removeItem("partnerToken");
    },
  },
});

export const { setPartner, logout } = authSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
