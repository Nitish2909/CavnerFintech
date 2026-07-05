import { useEffect, useState } from "react";
import { Check, X, Building2 } from "lucide-react";
import { getPartners, approvePartner, rejectPartner, updatePartnerStatus } from "../services/adminService";
import StatusBadge from "../components/StatusBadge";
import Pagination from "../components/Pagination";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getPartners({ page, status })
      .then(({ data }) => { setPartners(data.data.partners); setPages(data.data.pagination.pages); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [page, status]);

  const handleAction = async (id, action) => {
    if (action === "approve") await approvePartner(id);
    else if (action === "reject") await rejectPartner(id);
    load();
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Partners</h1>
        <p className="text-slate-500 text-sm">Approve and manage channel partners (DSA/NBFC/Agents)</p>
      </div>

      <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-slate-300">
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="blocked">Blocked</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="text-slate-400">Loading...</p>
        ) : partners.length === 0 ? (
          <p className="text-slate-400">No partners found</p>
        ) : partners.map((p) => (
          <div key={p._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-brand-100 flex items-center justify-center">
                  <Building2 size={20} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{p.companyName}</h3>
                  <p className="text-xs text-slate-500">{p.businessType}</p>
                </div>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              <p><span className="text-slate-400">Contact:</span> {p.contactPerson}</p>
              <p><span className="text-slate-400">Email:</span> {p.email}</p>
              <p><span className="text-slate-400">Phone:</span> {p.phone}</p>
              <p><span className="text-slate-400">GST:</span> {p.gstNumber || "-"}</p>
              <p><span className="text-slate-400">Leads:</span> {p.totalLeads} | <span className="text-slate-400">Commission:</span> ₹{p.totalCommission}</p>
            </div>
            <div className="flex gap-2 mt-4">
              {p.status === "pending" && (
                <>
                  <button onClick={() => handleAction(p._id, "approve")} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700">
                    <Check size={16} /> Approve
                  </button>
                  <button onClick={() => handleAction(p._id, "reject")} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-rose-600 text-white text-sm rounded-lg hover:bg-rose-700">
                    <X size={16} /> Reject
                  </button>
                </>
              )}
              {p.status === "approved" && (
                <button onClick={async () => { await updatePartnerStatus(p._id, "blocked"); load(); }} className="flex-1 px-3 py-2 bg-rose-50 text-rose-600 text-sm rounded-lg hover:bg-rose-100">
                  Block
                </button>
              )}
              {p.status === "blocked" && (
                <button onClick={async () => { await updatePartnerStatus(p._id, "approved"); load(); }} className="flex-1 px-3 py-2 bg-emerald-50 text-emerald-600 text-sm rounded-lg hover:bg-emerald-100">
                  Unblock
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Pagination page={page} pages={pages} onPage={setPage} />
    </div>
  );
};

export default Partners;
