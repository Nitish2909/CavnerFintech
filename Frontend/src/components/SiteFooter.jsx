// import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

// export default function SiteFooter() {
//   return (
//     <footer className="bg-[#0e2a35] text-white/90 mt-24">
//       {/* Upper Grid Layout */}
//       <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        
//         {/* Brand / About Column */}
//         <div className="flex flex-col">
//           <div className="flex items-center gap-2 shrink-0">
//             <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#f7941d] to-[#e63946] text-white grid place-items-center font-extrabold text-[1.15rem]">
//               ₹
//             </div>
//             <span className="text-[1.5rem] font-extrabold text-white">Fintech</span>
//           </div>
          
//           <p className="text-white/70 text-[0.875rem] max-w-md mt-4 leading-[1.5]">
//             Fintech is your trusted financial partner offering fast loan assistance, transparent comparisons across 300+ banks & NBFCs, and a smooth digital journey for every borrower.
//           </p>
          
//           {/* Social Icons Row */}
//           <div className="mt-5 flex gap-3">
//             {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
//               <a 
//                 key={i} 
//                 href="#" 
//                 className="w-9 h-9 rounded-full bg-white/10 grid place-items-center transition-colors duration-200 hover:bg-[#f7941d] text-white"
//               >
//                 <Icon size={16} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Dynamic Column Components */}
//         <FooterCol title="Loans" links={["Personal Loan", "Business Loan", "Home Loan", "Education Loan", "Car Loan", "Loan Against Property"]} />
//         <FooterCol title="Company" links={["About Us", "Become a Partner", "Careers", "Blog", "Contact Us"]} />
//         <FooterCol title="Tools" links={["EMI Calculator", "CIBIL Score Check", "Eligibility Calculator", "Compare Loans"]} />
//       </div>

//       {/* Footer Bottom Strip */}
//       <div className="border-top border-t border-white/10">
//         <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-[0.875rem] text-white/60">
//           <div className="flex flex-wrap justify-center gap-5">
//             <span className="inline-flex items-center gap-1.5"><Phone size={14} /> 9971740584</span>
//             <span className="inline-flex items-center gap-1.5"><Mail size={14} /> info@Fintech.com</span>
//             <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> India</span>
//           </div>
//           <p>© {new Date().getFullYear()} Fintech. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterCol({ title, links }) {
//   return (
//     <div className="flex flex-col">
//       <h4 className="text-white font-bold mb-4">{title}</h4>
//       <ul className="flex flex-col gap-2 text-[0.875rem]">
//         {links.map((l) => (
//           <li key={l}>
//             <a href="#" className="text-white/70 transition-colors duration-200 hover:text-[#f7941d]">
//               {l}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { Mail, Phone, MapPin } from "lucide-react";

// Clean, native SVG brand icons to completely bypass lucide-react package version mismatches
const SocialIcon = ({ name, size = 16 }) => {
  const icons = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
    )
  };

  return icons[name] || null;
};

export default function SiteFooter() {
  const socials = ["facebook", "instagram", "twitter", "linkedin", "youtube"];

  return (
    <footer className="bg-[#0e2a35] text-white/90 mt-24">
      {/* Upper Grid Layout */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        
        {/* Brand / About Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#f7941d] to-[#e63946] text-white grid place-items-center font-extrabold text-[1.15rem]">
              ₹
            </div>
            <span className="text-[1.5rem] font-extrabold text-white">Cavner Wealth & Fintech</span>
          </div>
          
          <p className="text-white/70 text-[0.875rem] max-w-md mt-4 leading-[1.5]">
            Cavner Wealth & Fintech is your trusted financial partner offering fast loan assistance, transparent comparisons across 300+ banks & NBFCs, and a smooth digital journey for every borrower.
          </p>
          
          {/* Social Icons Row */}
          <div className="mt-5 flex gap-3">
            {socials.map((name, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 grid place-items-center transition-colors duration-200 hover:bg-[#f7941d] text-white"
                aria-label={name}
              >
                <SocialIcon name={name} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Column Components */}
        <FooterCol title="Loans" links={["Personal Loan", "Business Loan", "Home Loan", "Education Loan", "Car Loan", "Loan Against Property"]} />
        <FooterCol title="Company" links={["About Us", "Become a Partner", "Careers", "Blog", "Contact Us"]} />
        <FooterCol title="Tools" links={["EMI Calculator", "CIBIL Score Check", "Eligibility Calculator", "Compare Loans"]} />
      </div>

      {/* Footer Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-[0.875rem] text-white/60">
          <div className="flex flex-wrap justify-center gap-5">
            <span className="inline-flex items-center gap-1.5"><Phone size={14} /> 9971740584</span>
            <span className="inline-flex items-center gap-1.5"><Mail size={14} /> info@Fintech.com</span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Karnal, Haryana India</span>
          </div>
          <p>© {new Date().getFullYear()} Cavner Wealth & Fintech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <ul className="flex flex-col gap-2 text-[0.875rem]">
        {links.map((l) => (
          <li key={l}>
            <a href={`/#${l}`} className="text-white/70 transition-colors duration-200 hover:text-[#f7941d]">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}