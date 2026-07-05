import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { getLoanProducts, createLoanProduct, updateLoanProduct, deleteLoanProduct } from "../services/adminService";
import Modal from "../components/Modal";

const emptyForm = {
  name: "", slug: "", category: "personal", description: "",
  interestRateMin: "", interestRateMax: "", minAmount: "", maxAmount: "",
  minTenureMonths: "", maxTenureMonths: "", processingFee: "", eligibility: "",
  documentsRequired: "", features: "", partnerBanks: "", isActive: true,
  metaTitle: "", metaDescription: "", metaKeywords: "",
};

const LoanProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => {
    setLoading(true);
    getLoanProducts().then(({ data }) => setProducts(data.data.products)).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditId(null); setModalOpen(true); };
  const openEdit = (p) => {
    setForm({
      ...emptyForm,
      ...p,
      documentsRequired: (p.documentsRequired || []).join(", "),
      features: (p.features || []).join(", "),
      partnerBanks: (p.partnerBanks || []).join(", "),
    });
    setEditId(p._id);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      interestRateMin: Number(form.interestRateMin) || 0,
      interestRateMax: Number(form.interestRateMax) || 0,
      minAmount: Number(form.minAmount) || 0,
      maxAmount: Number(form.maxAmount) || 0,
      minTenureMonths: Number(form.minTenureMonths) || 0,
      maxTenureMonths: Number(form.maxTenureMonths) || 0,
      documentsRequired: form.documentsRequired.split(",").map((s) => s.trim()).filter(Boolean),
      features: form.features.split(",").map((s) => s.trim()).filter(Boolean),
      partnerBanks: form.partnerBanks.split(",").map((s) => s.trim()).filter(Boolean),
    };
    if (editId) await updateLoanProduct(editId, payload);
    else await createLoanProduct(payload);
    setModalOpen(false);
    load();
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this loan product?")) { await deleteLoanProduct(id); load(); }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Loan Products</h1>
          <p className="text-slate-500 text-sm">Manage loan offerings</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? <p className="text-slate-400">Loading...</p> : products.map((p) => (
          <div key={p._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-slate-800">{p.name}</h3>
                <p className="text-xs text-slate-500 capitalize">{p.category}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(p)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Pencil size={15} /></button>
                <button onClick={() => handleDelete(p._id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"><Trash2 size={15} /></button>
              </div>
            </div>
            <p className="text-sm text-slate-600 line-clamp-2">{p.description}</p>
            <div className="mt-3 text-xs text-slate-500">
              <p>Rate: {p.interestRateMin}% - {p.interestRateMax}% p.a.</p>
              <p>Amount: ₹{p.minAmount?.toLocaleString()} - ₹{p.maxAmount?.toLocaleString()}</p>
            </div>
            <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full ${p.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
              {p.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Edit Loan Product" : "Add Loan Product"} size="xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-sm">
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input required placeholder="Slug (e.g. personal-loan)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300">
            <option value="personal">Personal</option>
            <option value="home">Home</option>
            <option value="education">Education</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
          <input placeholder="Processing Fee" value={form.processingFee} onChange={(e) => setForm({ ...form, processingFee: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Interest Min %" value={form.interestRateMin} onChange={(e) => setForm({ ...form, interestRateMin: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Interest Max %" value={form.interestRateMax} onChange={(e) => setForm({ ...form, interestRateMax: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Min Amount" value={form.minAmount} onChange={(e) => setForm({ ...form, minAmount: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Max Amount" value={form.maxAmount} onChange={(e) => setForm({ ...form, maxAmount: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Min Tenure (months)" value={form.minTenureMonths} onChange={(e) => setForm({ ...form, minTenureMonths: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Max Tenure (months)" value={form.maxTenureMonths} onChange={(e) => setForm({ ...form, maxTenureMonths: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Eligibility" value={form.eligibility} onChange={(e) => setForm({ ...form, eligibility: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Documents (comma separated)" value={form.documentsRequired} onChange={(e) => setForm({ ...form, documentsRequired: e.target.value })} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Features (comma separated)" value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Partner Banks (comma separated)" value={form.partnerBanks} onChange={(e) => setForm({ ...form, partnerBanks: e.target.value })} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Meta Title (SEO)" value={form.metaTitle} onChange={(e) => setForm({ ...form, metaTitle: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Meta Keywords (SEO)" value={form.metaKeywords} onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Meta Description (SEO)" value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <label className="flex items-center gap-2 col-span-2">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            Active
          </label>
          <button type="submit" className="col-span-2 bg-brand-600 text-white py-2.5 rounded-lg hover:bg-brand-700">
            {editId ? "Update" : "Create"} Product
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LoanProducts;
