import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User, Mail, Phone, MapPin, CreditCard, Calendar, Save, Loader2, LogOut } from "lucide-react";
import Seo from "../../components/Seo";
import { getMe, updateProfile, logout } from "../../services/apiService";
import { clearUser } from "../../store/index";
import { useDispatch } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRedux = useSelector((s) => s.auth.user);
  const [user, setUser] = useState(userRedux);
  const [form, setForm] = useState({ name: "", dob: "", pannumber: "", pincode: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getMe().then(({ data }) => {
      const u = data.data.user;
      setUser(u);
      setForm({ name: u.name || "", dob: u.dob || "", pannumber: u.pannumber || "", pincode: u.pincode || "" });
    }).catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const { data } = await updateProfile(form);
      setUser(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setMsg("Profile updated successfully");
    } catch (err) {
      setMsg(err.response?.data?.message || "Update failed");
    } finally { setLoading(false); }
  };

  const handleLogout = async () => {
    try { await logout(); } catch { /* ignore */ }
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <>
      <Seo title="My Profile" description="View and update your Cavner Fintech profile" path="/user/profile" />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
          <button onClick={handleLogout} className="flex items-center gap-1.5 px-4 py-2 text-sm text-rose-600 border border-slate-200 rounded-lg hover:bg-rose-50">
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Profile card */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-2xl">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">{user?.name}</h2>
              <p className="text-slate-500 text-sm">{user?.email}</p>
              <div className="flex gap-2 mt-1">
                {user?.isEmailVerified && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Email Verified</span>}
                {user?.isPhoneVerified && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Phone Verified</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Editable form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-4">
          <h3 className="font-bold text-slate-800 mb-2">Edit Details</h3>
          {msg && <div className={`text-sm px-4 py-2 rounded-lg ${msg.includes("success") ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"}`}>{msg}</div>}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Date of Birth</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">PAN Number</label>
              <div className="relative">
                <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={form.pannumber} onChange={(e) => setForm({ ...form, pannumber: e.target.value.toUpperCase() })} maxLength="10" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Pincode</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} maxLength="6" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email (read-only)</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={user?.email || ""} disabled className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Phone (read-only)</label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={user?.phone || ""} disabled className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-500" />
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading} className="flex items-center gap-2 bg-brand-700 text-white px-6 py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />} Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
