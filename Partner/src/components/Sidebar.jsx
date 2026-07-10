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

  // Shared Tailwind styles for a professional appearance
  const linkBaseClass = "flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 select-none group w-full";
  const activeClass = "bg-purple-50 text-purple-700 font-semibold";
  const inactiveClass = "text-gray-600 hover:bg-gray-50 hover:text-gray-900";

  const subLinkBaseClass = "block py-2 px-3 text-sm font-medium rounded-md transition-all duration-150";
  const subActiveLinkClass = "text-purple-700 bg-purple-50/50 font-semibold";
  const subInactiveLinkClass = "text-gray-500 hover:text-gray-900 hover:bg-gray-50";

  return (
    <>
      {/* Mobile Header Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-40 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center">
            <span className="text-white font-bold text-base tracking-wider">A</span>
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">AgentHub</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-900/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-gray-200/80 flex flex-col h-screen overflow-y-auto shadow-sm transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center shadow-md shadow-purple-900/10">
              <span className="text-white font-bold text-base tracking-wider">A</span>
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">AgentHub</span>
          </div>
          {/* Close button inside sidebar for mobile views */}
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Layer */}
        <div className="flex-1 px-3 pb-4">
          <nav className="space-y-1">
            
            {/* Products (Static Link) */}
            <NavLink 
              to="/products" 
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <Layers className={`w-4.5 h-4.5 transition-colors ${location.pathname === '/products' ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-700'}`} />
              <span>Products</span>
            </NavLink>

            {/* Business Section (Collapsible) */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('business')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/business') ? 'text-purple-700 bg-purple-50/30 font-semibold' : inactiveClass}`}
              >
                <Briefcase className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/business') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-700'}`} />
                <span className="flex-1">Business</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openMenus.business ? 'rotate-180 text-purple-600' : ''}`} />
              </button>
              {openMenus.business && (
                <div className="ml-8 pl-4 border-l border-gray-100 space-y-0.5 py-1">
                  <NavLink to="/business/add-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Add Lead</NavLink>
                  <NavLink to="/business/grab-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Grab Lead</NavLink>
                  <NavLink to="/business/lead-funnel" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Lead Funnel</NavLink>
                  <NavLink to="/business/lead-tracker" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Lead Tracker</NavLink>
                  {/* <NavLink to="/business/login-mis" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Login MIS</NavLink> */}
                  <NavLink to="/business/my-lead" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>My Lead</NavLink>
                </div>
              )}
            </div>

            {/* Employee Corner Section */}
            <div className="space-y-0.5 relative">
              {location.pathname.startsWith('/employee-corner') && (
                <div className="absolute left-0 top-1 bottom-1 w-1 bg-purple-700 rounded-r-md" />
              )}
              <button 
                onClick={() => toggleMenu('employeeCorner')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/employee-corner') ? 'text-purple-700 bg-purple-50/30 font-semibold' : inactiveClass}`}
              >
                <Users className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/employee-corner') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span className="flex-1">Employee Corner</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openMenus.employeeCorner ? 'rotate-180 text-purple-600' : ''}`} />
              </button>
              {openMenus.employeeCorner && (
                <div className="ml-8 pl-4 border-l border-gray-100 space-y-0.5 py-1">
                  <NavLink to="/employee-corner/my-team" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>My Team</NavLink>
                  <NavLink to="/employee-corner/designation-setting" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Designation Setting</NavLink>
                  <NavLink to="/employee-corner/partner" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Partner</NavLink>
                </div>
              )}
            </div>

            {/* Call Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('call')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/call') ? 'text-purple-700 bg-purple-50/30 font-semibold' : inactiveClass}`}
              >
                <Phone className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/call') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span className="flex-1">Call</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openMenus.call ? 'rotate-180 text-purple-600' : ''}`} />
              </button>
              {openMenus.call && (
                <div className="ml-8 pl-4 border-l border-gray-100 space-y-0.5 py-1">
                  <NavLink to="/call/call-log" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Call Log</NavLink>
                  <NavLink to="/call/import-data" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Import Data</NavLink>
                </div>
              )}
            </div>

            {/* Partner Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('partner')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/partner') ? 'text-purple-700 bg-purple-50/30 font-semibold' : inactiveClass}`}
              >
                <Handshake className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/partner') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span className="flex-1">Partner</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openMenus.partner ? 'rotate-180 text-purple-600' : ''}`} />
              </button>
              {openMenus.partner && (
                <div className="ml-8 pl-4 border-l border-gray-100 space-y-0.5 py-1">
                  <NavLink to="/partner/add-vendor-executive" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Add Executive</NavLink>
                  <NavLink to="/partner/vendor-list" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor List</NavLink>
                  <NavLink to="/partner/vendor-rm" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor RM</NavLink>
                    <NavLink to="/partner/vendor-code" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Vendor Code</NavLink>
                </div>
              )}
            </div>

            {/* Accounts Section */}
            <NavLink 
              to="/accounts/payout" 
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <UserCircle className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/accounts') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
              <span>Accounts</span>
            </NavLink>

            {/* Setting Section */}
            <div className="space-y-0.5">
              <button 
                onClick={() => toggleMenu('setting')} 
                className={`${linkBaseClass} text-left ${location.pathname.startsWith('/setting') ? 'text-purple-700 bg-purple-50/30 font-semibold' : inactiveClass}`}
              >
                <Settings className={`w-4.5 h-4.5 transition-colors ${location.pathname.startsWith('/setting') ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span className="flex-1">Setting</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openMenus.setting ? 'rotate-180 text-purple-600' : ''}`} />
              </button>
              {openMenus.setting && (
                <div className="ml-8 pl-4 border-l border-gray-100 space-y-0.5 py-1">
                  <NavLink to="/setting/company" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Company Setting</NavLink>
                  <NavLink to="/setting/offers" className={({ isActive }) => `${subLinkBaseClass} ${isActive ? subActiveLinkClass : subInactiveLinkClass}`}>Offers</NavLink>
                </div>
              )}
            </div>

          </nav>
        </div>
      </aside>
    </>
  );
}