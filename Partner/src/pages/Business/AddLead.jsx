import React from "react";
import { ArrowLeft, UserPlus } from "lucide-react";

const AddLead = () => {
  return (
    <div>
      {/* Header Section with Back Arrow */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between m-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 hover:bg-gray-200/70 rounded-full transition-colors duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-purple-700" /> Add Lead
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <h2 className=""> Select the right capture flow</h2>
          <p>   
            Choose a customer intent bucket, jump into the configured product
            stack, <br/>and keep the triage process in one place.
          </p>
        </div>
        <div className="">
          <div className="">
            <h2>CATEGORIES LIVE</h2>
          </div>
          <div className="">
            <h2>LAST SYNC</h2>
          </div>{" "}
          <div className="flex items-center border shadow-md">
            <h2>QUICK ACTION</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLead;
