import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Loader2, IndianRupee, Clock, FileText } from "lucide-react";
import Seo from "../../components/Seo";
import { getLoanProducts, getLoanProductBySlug } from "../../services/apiService";

const Loans = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getLoanProductBySlug(slug)
        .then(({ data }) => setProduct(data.data.product))
        .finally(() => setLoading(false));
    } else {
      getLoanProducts()
        .then(({ data }) => setProducts(data.data.products))
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <div className="py-20 text-center text-slate-500"><Loader2 className="animate-spin inline" /> Loading...</div>;

  // Single product detail
  if (slug && product) {
    return (
      <>
        <Seo title={product.metaTitle || product.name} description={product.metaDescription || product.description} keywords={product.metaKeywords} path={`/loans/${slug}`} />
        <div className="max-w-5xl mx-auto px-4 py-10">
          <nav className="text-sm text-slate-500 mb-4"><Link to="/" className="hover:text-brand-700">Home</Link> / <Link to="/loans" className="hover:text-brand-700">Loans</Link> / {product.name}</nav>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-slate-800 mb-3">{product.name}</h1>
              <p className="text-slate-600 mb-6">{product.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-500">Interest Rate</p>
                  <p className="text-lg font-bold text-brand-800">{product.interestRateMin}% - {product.interestRateMax}%</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-500">Loan Amount</p>
                  <p className="text-lg font-bold text-brand-800">₹{(product.minAmount / 1000).toFixed(0)}K - ₹{(product.maxAmount / 100000).toFixed(0)}L</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-500">Tenure</p>
                  <p className="text-lg font-bold text-brand-800">{product.minTenureMonths} - {product.maxTenureMonths} mo</p>
                </div>
              </div>

              <h2 className="font-bold text-slate-800 mb-3">Features</h2>
              <ul className="space-y-2 mb-6">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600"><CheckCircle2 size={18} className="text-brand-600 mt-0.5 shrink-0" /> {f}</li>
                ))}
              </ul>

              <h2 className="font-bold text-slate-800 mb-3">Eligibility</h2>
              <p className="text-slate-600 mb-6">{product.eligibility}</p>

              <h2 className="font-bold text-slate-800 mb-3">Documents Required</h2>
              <ul className="space-y-2 mb-6">
                {product.documentsRequired?.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600"><FileText size={18} className="text-brand-600 mt-0.5 shrink-0" /> {d}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sticky top-20">
                <h3 className="font-bold text-slate-800 mb-2">Apply for {product.name}</h3>
                <p className="text-sm text-slate-500 mb-4">Get instant approval with minimal documentation.</p>
                <Link to="/applyforloan" className="flex items-center justify-center gap-2 w-full bg-brand-700 text-white py-3 rounded-lg hover:bg-brand-800">
                  Apply Now <ArrowRight size={18} />
                </Link>
                <div className="mt-4 space-y-2 text-sm text-slate-500">
                  <p className="flex items-center gap-2"><Clock size={16} /> Quick approval</p>
                  <p className="flex items-center gap-2"><IndianRupee size={16} /> Best rates</p>
                  <p className="flex items-center gap-2"><CheckCircle2 size={16} /> 40+ partner banks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // List view
  return (
    <>
      <Seo title="All Loans" description="Compare and apply for personal, home, education and business loans in India" path="/loans" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">All Loan Products</h1>
        <p className="text-slate-500 mb-8">Compare loans from 40+ banks and NBFCs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <Link key={p._id} to={`/loans/${p.slug}`} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-300 transition-all">
              <h3 className="font-bold text-slate-800 mb-1 capitalize">{p.name}</h3>
              <p className="text-sm text-slate-500 mb-3 line-clamp-2">{p.description}</p>
              <p className="text-sm font-semibold text-brand-700">{p.interestRateMin}% - {p.interestRateMax}% p.a.</p>
              <div className="flex items-center gap-1 text-sm text-brand-600 mt-3 group-hover:gap-2 transition-all">View Details <ArrowRight size={14} /></div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loans;
