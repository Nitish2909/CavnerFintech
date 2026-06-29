import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div>
      <nav className="flex items-center  bg-gray-500 text-white ">
        <div className="flex items-center gap-8 p-2 ml-10 w-full ml-95">
          <Link to="/creditcard">CREDIT CARD</Link>
          <Link to="applyloan">APPLY LOAN</Link>
          <Link to="/investmentplan">INVESTMENT PLAN</Link>
          <Link to="corporatefinance">CORPORATE FINANCE</Link>
          <Link to="becomeapartner">BECOME A PARTNER</Link>
          <Link to="contactus">CONTACT US</Link>
        </div>
      </nav>
    </div>
  );
};
export default Header2;
