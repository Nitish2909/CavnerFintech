import { useEffect, useState } from "react";

const Pagination = ({ page, pages, onPage }) => {
  if (pages <= 1) return null;
  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page <= 1}
        className="px-3 py-1.5 text-sm rounded-lg border border-slate-300 disabled:opacity-40 hover:bg-slate-50"
      >
        Prev
      </button>
      <span className="text-sm text-slate-600">
        Page {page} of {pages}
      </span>
      <button
        onClick={() => onPage(page + 1)}
        disabled={page >= pages}
        className="px-3 py-1.5 text-sm rounded-lg border border-slate-300 disabled:opacity-40 hover:bg-slate-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
