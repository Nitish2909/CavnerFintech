import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, Users, TrendingUp, ShieldCheck, Award } from "lucide-react";
import Seo from "../components/Seo";

const BecomePartner = () => {
  const benefits = [
    { icon: IndianRupee, title: "Attractive Commissions", desc: "Earn up to 2% commission on every successful loan disbursal." },
    { icon: TrendingUp, title: "Grow Your Business", desc: "Access 40+ bank products to offer your customers the best deals." },
    { icon: Users, title: "Dedicated Support", desc: "Get a relationship manager and 24/7 partner support." },
    { icon: ShieldCheck, title: "Trusted Platform", desc: "RBI-compliant processes and secure technology infrastructure." },
  ];

  return (
    <>
      <Seo title="Become a Partner" description="Join Cavner Fintech as a channel partner - DSA, NBFC, or agent. Earn commissions on loan and credit card referrals." path="/partner" keywords="become partner, DSA, NBFC partner, loan agent, fintech partner" />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-4">Partner Program</span>
          <h1 className="text-4xl font-bold mb-3">Grow Your Business with Cavner</h1>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">Join 1000+ partners earning attractive commissions by offering loans and credit cards to their customers.</p>
          <Link to="/partnersregisteration" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700">
            Register as Partner <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-brand-700" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-brand-50 rounded-2xl p-8 text-center">
          <Award size={40} className="text-brand-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-6">Registration takes 5 minutes. Get approved within 48 hours.</p>
          <Link to="/partnersregisteration" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800">
            Register Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
