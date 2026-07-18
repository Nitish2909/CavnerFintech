import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Layers, Briefcase, Users, Phone, 
  Handshake, UserCircle, Settings, ChevronDown, Menu, X 
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar toggle state
  const [openMenus, setOpenMenus] = useState({
    business: false,
    employeeCorner: true,
    call: false,
    partner: false,
    setting: false,
  });

  const location = useLocation();

  // Close mobile sidebar automatically when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = (menuKey) => {
    setOpenMenus(prev => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  // Enhanced SaaS design tokens for ultra-premium layout presentation
  const linkBaseClass = "relative flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 select-none group w-full overflow-hidden active:scale-[0.99]";
  const activeClass = "bg-blue-50/70 text-blue-700 font-semibold border border-blue-100/40 shadow-[0_1px_2px_rgba(29,78,216,0.02)]";
  const inactiveClass = "text-slate-600 hover:bg-slate-50 hover:text-slate-900";

  const subLinkBaseClass = "block py-2 px-4 text-xs font-medium rounded-lg transition-all duration-200";
  const subActiveLinkClass = "text-blue-700 bg-blue-50/40 font-semibold";
  const subInactiveLinkClass = "text-slate-500 hover:text-slate-900 hover:bg-slate-50/50";

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 flex items-center justify-between z-40 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-inner">
            UF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-sm leading-none">User Franchise</span>
            <span className="text-[10px] text-blue-600 font-medium mt-0.5">Partner Dashboard</span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[270px] bg-white border-r border-slate-100 flex flex-col h-screen
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        lg:sticky lg:top-0 lg:translate-x-0 lg:z-auto
        ${isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Profile Card Header (Replaced AgentHub) */}
        <div className="p-4 border-b border-slate-100/80 shrink-0">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl p-4 text-center overflow-hidden shadow-md group">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none transition-transform group-hover:scale-125 duration-500" />
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-400/20 rounded-full blur-lg pointer-events-none" />

            {/* Close button for mobile views */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="lg:hidden absolute top-2 right-2 text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar Holder */}
            <div className="relative inline-block mb-2">
              <div className="w-14 h-14 rounded-full bg-white/15 p-1 backdrop-blur-md inline-flex items-center justify-center border border-white/20 shadow-inner">
                <UserCircle className="w-full h-full text-white/95 stroke-[1.25]" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-xs" />
            </div>

            {/* Content Info */}
            <h3 className="text-white font-semibold text-sm tracking-wide leading-tight drop-shadow-xs">
              User Franchise
            </h3>
            
            {/* Status Badge Tag */}
            <div className="mt-2 inline-flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 text-[10px] text-white font-medium tracking-wider uppercase select-none">
              <span>Franchise</span>
              <ChevronDown className="w-2.5 h-2.5 opacity-80" />
            </div>

            {/* Rating Stars Graphic */}
            <div className="flex items-center justify-center gap-0.5 mt-2 text-amber-300 drop-shadow-xs text-xs select-none">
              ★ ★ ★ ★ <span className="text-white/60 text-[10px] ml-0.5 font-medium">4.0</span>
            </div>
          </div>
        </div>

        {/* Navigation Layer */}
        <div className="flex-1 overflow-y-auto min-h-0 px-3.5 py-4 [scrollbar-width:thin] [@media(hover:none)]:overflow-y-scroll">
          <nav className="space-y-1 pb-6">
            
            {/* Products (Static Link) */}
            <NavLink 
              to="/products" 
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                  <Layers className={`w-4.5 h-4.5 transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="tracking-wide">Products</span>
                </>
              )}
            </NavLink>

            {/* Business Section (Collapsible) */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('business')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/business') ? 'text-blue-700 bg-blue-50/40 font-semibold border border-blue-100/30' : inactiveClass}`}
              >
                {location.pathname.startsWith('/business') && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                <Briefcase className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/business') ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="flex-1 tracking-wide">Business</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ${openMenus.business ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-250 ease-in-out ${openMenus.business ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                <div className="overflow-hidden">
                  <div className="ml-[21px] pl-3 border-l border-slate-100 space-y-0.5 py-1">
                    <NavLink to="/business/add-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Add Lead</NavLink>
                    <NavLink to="/business/grab-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Grab Lead</NavLink>
                    <NavLink to="/business/lead-funnel" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Lead Funnel</NavLink>
                    <NavLink to="/business/lead-tracker" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Lead Tracker</NavLink>
                    <NavLink to="/business/my-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>My Lead</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Corner Section */}
            <div className="space-y-0.5 relative">
              <button 
                onClick={() => toggleMenu('employeeCorner')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/employee-corner') ? 'text-blue-700 bg-blue-50/40 font-semibold border border-blue-100/30' : inactiveClass}`}
              >
                {location.pathname.startsWith('/employee-corner') && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                <Users className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/employee-corner') ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="flex-1 tracking-wide">Employee Corner</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ${openMenus.employeeCorner ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-250 ease-in-out ${openMenus.employeeCorner ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                <div className="overflow-hidden">
                  <div className="ml-[21px] pl-3 border-l border-slate-100 space-y-0.5 py-1">
                    <NavLink to="/employee-corner/my-team" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>My Team</NavLink>
                    <NavLink to="/employee-corner/designation-setting" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Designation Setting</NavLink>
                    <NavLink to="/employee-corner/partner" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Partner</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('call')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/call') ? 'text-blue-700 bg-blue-50/40 font-semibold border border-blue-100/30' : inactiveClass}`}
              >
                {location.pathname.startsWith('/call') && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                <Phone className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/call') ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="flex-1 tracking-wide">Call</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ${openMenus.call ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-250 ease-in-out ${openMenus.call ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                <div className="overflow-hidden">
                  <div className="ml-[21px] pl-3 border-l border-slate-100 space-y-0.5 py-1">
                    <NavLink to="/call/call-log" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Call Log</NavLink>
                    <NavLink to="/call/import-data" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Import Data</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('partner')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/partner') ? 'text-blue-700 bg-blue-50/40 font-semibold border border-blue-100/30' : inactiveClass}`}
              >
                {location.pathname.startsWith('/partner') && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                <Handshake className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/partner') ? 'text-blue-700' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="flex-1 tracking-wide">Partner</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ${openMenus.partner ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-250 ease-in-out ${openMenus.partner ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                <div className="overflow-hidden">
                  <div className="ml-[21px] pl-3 border-l border-slate-100 space-y-0.5 py-1">
                    <NavLink to="/partner/add-vendor-executive" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Add Executive</NavLink>
                    <NavLink to="/partner/vendor-list" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor List</NavLink>
                    <NavLink to="/partner/vendor-rm" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor RM</NavLink>
                    <NavLink to="/partner/vendor-code" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor Code</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Accounts Section */}
            <NavLink 
              to="/accounts/payout" 
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                  <UserCircle className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/accounts') ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="tracking-wide">Accounts</span>
                </>
              )}
            </NavLink>

            {/* Setting Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('setting')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/setting') ? 'text-blue-700 bg-blue-50/40 font-semibold border border-purple-100/30' : inactiveClass}`}
              >
                {location.pathname.startsWith('/setting') && <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-md" />}
                <Settings className={`w-4.5 h-4.5 transition-colors duration-200 ${location.pathname.startsWith('/setting') ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="flex-1 tracking-wide">Setting</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ${openMenus.setting ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-250 ease-in-out ${openMenus.setting ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                <div className="overflow-hidden">
                  <div className="ml-[21px] pl-3 border-l border-slate-100 space-y-0.5 py-1">
                    <NavLink to="/setting/company" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Company Setting</NavLink>
                    <NavLink to="/setting/offers" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Offers</NavLink>
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </aside>
    </>
  );
}