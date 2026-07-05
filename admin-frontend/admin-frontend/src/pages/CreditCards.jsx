import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { getCreditCards, createCreditCard, updateCreditCard, deleteCreditCard } from "../services/adminService";
import Modal from "../components/Modal";

const emptyForm = {
  name: "", slug: "", issuer: "", cardType: "rupay", category: "cashback",
  description: "", annualFee: "", joiningFee: "", interestRate: "", creditLimit: "",
  benefits: "", eligibility: "", isActive: true,
  metaTitle: "", metaDescription: "", metaKeywords: "",
};

const CreditCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => {
    setLoading(true);
    getCreditCards().then(({ data }) => setCards(data.data.cards)).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditId(null); setModalOpen(true); };
  const openEdit = (c) => {
    setForm({ ...emptyForm, ...c, benefits: (c.benefits || []).join(", ") });
    setEditId(c._id);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      annualFee: Number(form.annualFee) || 0,
      joiningFee: Number(form.joiningFee) || 0,
      interestRate: Number(form.interestRate) || 0,
      benefits: form.benefits.split(",").map((s) => s.trim()).filter(Boolean),
    };
    if (editId) await updateCreditCard(editId, payload);
    else await createCreditCard(payload);
    setModalOpen(false);
    load();
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this credit card?")) { await deleteCreditCard(id); load(); }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Credit Cards</h1>
          <p className="text-slate-500 text-sm">Manage credit card offerings</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
          <Plus size={18} /> Add Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? <p className="text-slate-400">Loading...</p> : cards.map((c) => (
          <div key={c._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-slate-800">{c.name}</h3>
                <p className="text-xs text-slate-500">{c.issuer} · {c.cardType}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(c)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Pencil size={15} /></button>
                <button onClick={() => handleDelete(c._id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"><Trash2 size={15} /></button>
              </div>
            </div>
            <p className="text-sm text-slate-600 line-clamp-2">{c.description}</p>
            <div className="mt-3 text-xs text-slate-500">
              <p>Annual Fee: ₹{c.annualFee} | Joining: ₹{c.joiningFee}</p>
              <p>Category: {c.category}</p>
            </div>
            <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full ${c.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
              {c.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Edit Credit Card" : "Add Credit Card"} size="xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-sm">
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input required placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input required placeholder="Issuer (e.g. HDFC Bank)" value={form.issuer} onChange={(e) => setForm({ ...form, issuer: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <select value={form.cardType} onChange={(e) => setForm({ ...form, cardType: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300">
            <option value="rupay">RuPay</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">Amex</option>
          </select>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300">
            <option value="cashback">Cashback</option>
            <option value="rewards">Rewards</option>
            <option value="travel">Travel</option>
            <option value="fuel">Fuel</option>
            <option value="shopping">Shopping</option>
            <option value="premium">Premium</option>
            <option value="business">Business</option>
          </select>
          <input placeholder="Credit Limit" value={form.creditLimit} onChange={(e) => setForm({ ...form, creditLimit: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Annual Fee" value={form.annualFee} onChange={(e) => setForm({ ...form, annualFee: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Joining Fee" value={form.joiningFee} onChange={(e) => setForm({ ...form, joiningFee: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input type="number" placeholder="Interest Rate %" value={form.interestRate} onChange={(e) => setForm({ ...form, interestRate: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Eligibility" value={form.eligibility} onChange={(e) => setForm({ ...form, eligibility: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Benefits (comma separated)" value={form.benefits} onChange={(e) => setForm({ ...form, benefits: e.target.value })} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Meta Title (SEO)" value={form.metaTitle} onChange={(e) => setForm({ ...form, metaTitle: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <input placeholder="Meta Keywords (SEO)" value={form.metaKeywords} onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-300" />
          <textarea placeholder="Meta Description (SEO)" value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} rows={2} className="col-span-2 px-3 py-2 rounded-lg border border-slate-300" />
          <label className="flex items-center gap-2 col-span-2">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            Active
          </label>
          <button type="submit" className="col-span-2 bg-brand-600 text-white py-2.5 rounded-lg hover:bg-brand-700">
            {editId ? "Update" : "Create"} Card
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CreditCards;
