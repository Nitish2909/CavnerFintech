import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm">CWF</div>
              <div>
                <p className="font-bold text-white text-lg">Cavner</p>
                <p className="text-xs text-brand-400 -mt-1">Wealth & Fintech</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your trusted partner for loans, credit cards, investments and corporate finance across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-700 transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Loans */}
          <div>
            <h3 className="font-semibold text-white mb-4">Loans</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/loans/personal-loan" className="hover:text-brand-400">Personal Loan</Link></li>
              <li><Link to="/loans/home-loan" className="hover:text-brand-400">Home Loan</Link></li>
              <li><Link to="/loans/education-loan" className="hover:text-brand-400">Education Loan</Link></li>
              <li><Link to="/loans/business-loan" className="hover:text-brand-400">Business Loan</Link></li>
              <li><Link to="/credit-card" className="hover:text-brand-400">Credit Cards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/corporate" className="hover:text-brand-400">Corporate Finance</Link></li>
              <li><Link to="/investment" className="hover:text-brand-400">Investments</Link></li>
              <li><Link to="/government-services" className="hover:text-brand-400">Government Services</Link></li>
              <li><Link to="/partner" className="hover:text-brand-400">Become a Partner</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-brand-400 shrink-0" /> <a href="tel:918816942362">+91 88169 42362</a></li>
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-brand-400 shrink-0" /> <a href="mailto:info@cavnerfintech.in">info@cavnerfintech.in</a></li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-brand-400 shrink-0" /> India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cavner Wealth & Fintech. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-brand-500" />
            <span>Secured with bank-grade encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
