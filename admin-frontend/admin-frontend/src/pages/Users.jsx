import { useEffect, useState } from "react";
import { Search, Eye, Ban, CheckCircle } from "lucide-react";
import { getUsers, updateUserStatus } from "../services/adminService";
import StatusBadge from "../components/StatusBadge";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const load = () => {
    setLoading(true);
    getUsers({ page, search, status })
      .then(({ data }) => {
        setUsers(data.data.users);
        setPages(data.data.pagination.pages);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [page, status]);

  const handleSearch = (e) => { e.preventDefault(); setPage(1); load(); };

  const toggleStatus = async (id, current) => {
    const newStatus = current === "blocked" ? "active" : "blocked";
    await updateUserStatus(id, newStatus);
    load();
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Users</h1>
        <p className="text-slate-500 text-sm">Manage registered users</p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
          />
        </div>
        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-slate-300">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
        <button type="submit" className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">Search</button>
      </form>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Email</th>
                <th className="text-left px-4 py-3 font-medium">Phone</th>
                <th className="text-left px-4 py-3 font-medium">PAN</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Joined</th>
                <th className="text-left px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="7" className="text-center py-8 text-slate-400">Loading...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan="7" className="text-center py-8 text-slate-400">No users found</td></tr>
              ) : users.map((u) => (
                <tr key={u._id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{u.name}</td>
                  <td className="px-4 py-3 text-slate-600">{u.email}</td>
                  <td className="px-4 py-3 text-slate-600">{u.phone}</td>
                  <td className="px-4 py-3 text-slate-600">{u.pannumber || "-"}</td>
                  <td className="px-4 py-3"><StatusBadge status={u.status} /></td>
                  <td className="px-4 py-3 text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => setSelected(u)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="View"><Eye size={16} /></button>
                      <button onClick={() => toggleStatus(u._id, u.status)} className={`p-1.5 rounded ${u.status === "blocked" ? "text-emerald-600 hover:bg-emerald-50" : "text-rose-600 hover:bg-rose-50"}`} title={u.status === "blocked" ? "Unblock" : "Block"}>
                        {u.status === "blocked" ? <CheckCircle size={16} /> : <Ban size={16} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination page={page} pages={pages} onPage={setPage} />

      <Modal open={!!selected} onClose={() => setSelected(null)} title="User Details">
        {selected && (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Name:</span><span className="font-medium">{selected.name}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Email:</span><span>{selected.email}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Phone:</span><span>{selected.phone}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">PAN:</span><span>{selected.pannumber || "-"}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">DOB:</span><span>{selected.dob || "-"}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Pincode:</span><span>{selected.pincode || "-"}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Email Verified:</span><span>{selected.isEmailVerified ? "Yes" : "No"}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Phone Verified:</span><span>{selected.isPhoneVerified ? "Yes" : "No"}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Joined:</span><span>{new Date(selected.createdAt).toLocaleString()}</span></div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Users;
