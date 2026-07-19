import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Seo from "../components/Seo";
import { getCreditCards } from "../services/apiService";

const CreditCardPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCreditCards().then(({ data }) => setCards(data.data.cards)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo title="Credit Cards" description="Compare and apply for the best credit cards in India - cashback, travel, rewards, fuel cards" path="/credit-card" />
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Find Your Perfect Credit Card</h1>
          <p className="text-brand-100 max-w-xl mx-auto">Compare cashback, travel, rewards, and fuel credit cards from top Indian banks.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? <div className="text-center text-slate-500"><Loader2 className="animate-spin inline" /> Loading...</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div key={c._id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white">
                  <CreditCard size={32} className="mb-3" />
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <p className="text-brand-100 text-sm">{c.issuer}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 mb-3">{c.description}</p>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-slate-500">Annual Fee</span>
                    <span className="font-semibold">₹{c.annualFee}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-slate-500">Category</span>
                    <span className="font-semibold capitalize">{c.category}</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {c.benefits?.slice(0, 3).map((b, i) => (
                      <p key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 size={14} className="text-brand-600 mt-0.5 shrink-0" /> {b}</p>
                    ))}
                  </div>
                  <Link to="/apply-for-credit-card" className="flex items-center justify-center gap-2 w-full bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800">
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CreditCardPage;
