import React from "react";
import LoanCard from "../../components/LoanCard";
import { Search } from "lucide-react";

const HomeLoan = () => {
  return (
    <div>
      <div>
        <img
          src="https://ik.imagekit.io/tpzm8ak07/images/homeSlider/HomeLoanbanner1.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-medium text-green-600">A Wide Range of Home Loan To Choose From</h1>
        <p className="font-medium mt-2">
          No matter what your need or budget is, Fintech has an option for
          everyone
        </p>
      </div>
    <div className="">
        <div className="mt-10">
         <LoanCard/>
    </div>
    </div>
    </div>
  );
};

export default HomeLoan;
