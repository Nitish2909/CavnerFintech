import { useEffect, useState } from "react";
import { getCreditCardApplications, updateCreditCardApplicationStatus } from "../services/adminService";
import StatusBadge from "../components/StatusBadge";
import Pagination from "../components/Pagination";

const CardApplications = () => {
  const [apps, setApps] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getCreditCardApplications({ page, status })
      .then(({ data }) => { setApps(data.data.applications); setPages(data.data.pagination.pages); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [page, status]);

  const changeStatus = async (id, newStatus) => {
    await updateCreditCardApplicationStatus(id, { status: newStatus });
    load();
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Credit Card Applications</h1>
        <p className="text-slate-500 text-sm">Review credit card applications</p>
      </div>

      <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-slate-300">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="under_review">Under Review</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Applicant</th>
                <th className="text-left px-4 py-3 font-medium">Card</th>
                <th className="text-left px-4 py-3 font-medium">Income</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Date</th>
                <th className="text-left px-4 py-3 font-medium">Update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="6" className="text-center py-8 text-slate-400">Loading...</td></tr>
              ) : apps.length === 0 ? (
                <tr><td colSpan="6" className="text-center py-8 text-slate-400">No applications</td></tr>
              ) : apps.map((a) => (
                <tr key={a._id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800">{a.applicantName}</p>
                    <p className="text-xs text-slate-500">{a.email} | {a.phone}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{a.creditCard?.name || "-"}</td>
                  <td className="px-4 py-3 text-slate-600">₹{a.monthlyIncome?.toLocaleString()}</td>
                  <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
                  <td className="px-4 py-3 text-slate-500">{new Date(a.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <select
                      value={a.status}
                      onChange={(e) => changeStatus(a._id, e.target.value)}
                      className="px-2 py-1 text-xs rounded border border-slate-300"
                    >
                      <option value="pending">Pending</option>
                      <option value="under_review">Under Review</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination page={page} pages={pages} onPage={setPage} />
    </div>
  );
};

export default CardApplications;
