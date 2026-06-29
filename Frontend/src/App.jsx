import Home from "./pages/Home";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SiteFooter />
    </>
  );
};

export default App;
