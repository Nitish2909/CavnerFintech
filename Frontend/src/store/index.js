import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    token: localStorage.getItem("userToken") || null,
    partner: JSON.parse(localStorage.getItem("partner") || "null"),
    partnerToken: localStorage.getItem("partnerToken") || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("userToken", action.payload.token);
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("userToken");
    },
    setPartner: (state, action) => {
      state.partner = action.payload.partner;
      state.partnerToken = action.payload.token;
      localStorage.setItem("partner", JSON.stringify(action.payload.partner));
      localStorage.setItem("partnerToken", action.payload.token);
    },
    clearPartner: (state) => {
      state.partner = null;
      state.partnerToken = null;
      localStorage.removeItem("partner");
      localStorage.removeItem("partnerToken");
    },
  },
});

export const { setUser, clearUser, setPartner, clearPartner } = authSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
