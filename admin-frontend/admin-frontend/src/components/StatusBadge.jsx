import { useState } from "react";

const StatusBadge = ({ status }) => {
  const colors = {
    pending: "bg-amber-100 text-amber-700",
    under_review: "bg-blue-100 text-blue-700",
    approved: "bg-emerald-100 text-emerald-700",
    rejected: "bg-rose-100 text-rose-700",
    disbursed: "bg-violet-100 text-violet-700",
    active: "bg-emerald-100 text-emerald-700",
    blocked: "bg-rose-100 text-rose-700",
    new: "bg-sky-100 text-sky-700",
    contacted: "bg-amber-100 text-amber-700",
    submitted: "bg-blue-100 text-blue-700",
  };
  const cls = colors[status] || "bg-slate-100 text-slate-700";
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${cls}`}>
      {status?.replace("_", " ")}
    </span>
  );
};

export default StatusBadge;
