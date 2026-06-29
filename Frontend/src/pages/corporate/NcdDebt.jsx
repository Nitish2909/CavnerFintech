import React from "react";
import { Building } from "lucide-react";

const NcdDebt = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <Building className="text-cyan-600 w-8 h-8" />
        <h1 className="text-3xl font-bold tracking-tight">NCD & Structured Debt</h1>
      </div>
      <p className="text-gray-600 mb-4">
        Non-Convertible Debentures and custom structured debt mechanisms tailored to your company's long-term capital requirements.
      </p>
    </div>
  );
};

export default NcdDebt;