import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";

const InfoPage = ({ title, description, path, features = [], ctaText = "Apply Now", ctaLink = "/applyforloan" }) => {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-500 mb-4"><Link to="/" className="hover:text-brand-700">Home</Link> / {title}</nav>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">{title}</h1>
        <p className="text-slate-600 mb-8">{description}</p>

        {features.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-5">
                <h3 className="font-semibold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        <Link to={ctaLink} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800">
          {ctaText} <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
};

export default InfoPage;
