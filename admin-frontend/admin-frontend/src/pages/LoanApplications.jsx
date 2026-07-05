import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getLoanApplications, updateLoanApplicationStatus } from "../services/adminService";
import StatusBadge from "../components/StatusBadge";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

const LoanApplications = () => {
  const [apps, setApps] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [approvedAmt, setApprovedAmt] = useState("");

  const load = () => {
    setLoading(true);
    getLoanApplications({ page, status })
      .then(({ data }) => { setApps(data.data.applications); setPages(data.data.pagination.pages); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [page, status]);

  const openModal = (app) => {
    setSelected(app);
    setNewStatus(app.status);
    setNotes(app.adminNotes || "");
    setApprovedAmt(app.approvedAmount || "");
  };

  const saveStatus = async () => {
    await updateLoanApplicationStatus(selected._id, {
      status: newStatus,
      adminNotes: notes,
      approvedAmount: approvedAmt ? Number(approvedAmt) : undefined,
    });
    setSelected(null);
    load();
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Loan Applications</h1>
        <p className="text-slate-500 text-sm">Review and process loan applications</p>
      </div>

      <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-slate-300">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="under_review">Under Review</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="disbursed">Disbursed</option>
      </select>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Applicant</th>
                <th className="text-left px-4 py-3 font-medium">Loan Type</th>
                <th className="text-left px-4 py-3 font-medium">Amount</th>
                <th className="text-left px-4 py-3 font-medium">Tenure</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Date</th>
                <th className="text-left px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="7" className="text-center py-8 text-slate-400">Loading...</td></tr>
              ) : apps.length === 0 ? (
                <tr><td colSpan="7" className="text-center py-8 text-slate-400">No applications</td></tr>
              ) : apps.map((a) => (
                <tr key={a._id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800">{a.applicantName}</p>
                    <p className="text-xs text-slate-500">{a.email}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-600 capitalize">{a.loanType}</td>
                  <td className="px-4 py-3 text-slate-600">₹{a.amountRequested?.toLocaleString()}</td>
                  <td className="px-4 py-3 text-slate-600">{a.tenureMonths} mo</td>
                  <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
                  <td className="px-4 py-3 text-slate-500">{new Date(a.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => openModal(a)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Eye size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination page={page} pages={pages} onPage={setPage} />

      <Modal open={!!selected} onClose={() => setSelected(null)} title="Loan Application Details" size="lg">
        {selected && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-slate-500">Applicant:</span> <span className="font-medium">{selected.applicantName}</span></div>
              <div><span className="text-slate-500">Email:</span> {selected.email}</div>
              <div><span className="text-slate-500">Phone:</span> {selected.phone}</div>
              <div><span className="text-slate-500">PAN:</span> {selected.panNumber || "-"}</div>
              <div><span className="text-slate-500">Loan Type:</span> <span className="capitalize">{selected.loanType}</span></div>
              <div><span className="text-slate-500">Amount:</span> ₹{selected.amountRequested?.toLocaleString()}</div>
              <div><span className="text-slate-500">Tenure:</span> {selected.tenureMonths} months</div>
              <div><span className="text-slate-500">Income:</span> ₹{selected.monthlyIncome?.toLocaleString()}/mo</div>
              <div><span className="text-slate-500">Employment:</span> <span className="capitalize">{selected.employmentType}</span></div>
              <div><span className="text-slate-500">City:</span> {selected.city}, {selected.state}</div>
              <div><span className="text-slate-500">Purpose:</span> {selected.purpose || "-"}</div>
            </div>

            {selected.documents?.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Documents</h4>
                <div className="space-y-1">
                  {selected.documents.map((d, i) => (
                    <a key={i} href={d.url} target="_blank" rel="noreferrer" className="block text-blue-600 hover:underline text-sm">
                      {d.name} - View
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t pt-4 space-y-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Update Status</label>
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300">
                  <option value="pending">Pending</option>
                  <option value="under_review">Under Review</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="disbursed">Disbursed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Approved Amount (₹)</label>
                <input type="number" value={approvedAmt} onChange={(e) => setApprovedAmt(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Admin Notes</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full px-3 py-2 rounded-lg border border-slate-300" />
              </div>
              <button onClick={saveStatus} className="w-full bg-brand-600 text-white py-2.5 rounded-lg hover:bg-brand-700">Save Changes</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LoanApplications;
