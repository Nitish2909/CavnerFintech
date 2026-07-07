import React from "react";
import { Briefcase } from "lucide-react";

const CapexFinance = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-cyan-600 w-8 h-8" />
        <h1 className="text-3xl font-bold tracking-tight">Project / Capital Expenditure (CAPEX) Finance</h1>
      </div>
      <p className="text-gray-600 mb-4">
        Finance plant expansions, industrial machinery imports, asset acquisitions, or new facility infrastructure projects.
      </p>
    </div>
  );
};

export default CapexFinance;