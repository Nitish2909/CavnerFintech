import React, { useState } from 'react';
import { 
  Briefcase, 
  Calculator, 
  Shield,
  ArrowRight,
  LayoutGrid
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'banking',
    title: 'Banking Products',
    description: 'All docs, assets, and launch aids in one place.',
    icon: Briefcase,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50/80 group-hover:bg-blue-600 group-hover:text-white',
    ringColor: 'group-hover:ring-blue-100',
    textColor: 'text-blue-600'
  },
  {
    id: 'legal',
    title: 'CA & Legal Services',
    description: 'All docs, assets, and launch aids in one place.',
    icon: Calculator,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50/80 group-hover:bg-orange-600 group-hover:text-white',
    ringColor: 'group-hover:ring-orange-100',
    textColor: 'text-orange-600'
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'All docs, assets, and launch aids in one place.',
    icon: Shield,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50/80 group-hover:bg-indigo-600 group-hover:text-white',
    ringColor: 'group-hover:ring-indigo-100',
    textColor: 'text-indigo-600'
  },
];

const Product = () => {
  const [activeTab, setActiveTab] = useState('use-services');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/70 to-zinc-50 p-6 md:p-12 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Top Header/Brand */}
      <div className="max-w-6xl mx-auto mb-10 flex items-center justify-between px-1">
        <div className="flex items-center space-x-3.5">
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-black rounded-xl text-base w-10 h-10 flex items-center justify-center shadow-lg shadow-indigo-200/80 transform transition-all hover:scale-105 hover:rotate-6 duration-300">
            P
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-xl tracking-tight block leading-tight">Service Portal</span>
            <span className="text-xs font-medium text-slate-400">Enterprise Dashboard</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.04)] p-6 md:p-10 transition-all duration-300">
        
        {/* Navigation Tabs Container */}
        <div className="bg-slate-100/80 p-1.5 rounded-2xl flex border border-slate-200/30 max-w-sm">
          {['use-services', 'quick-products'].map((tabId) => (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`flex-1 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 relative capitalize tracking-wide ${
                activeTab === tabId
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
              }`}
            >
              {tabId.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Section Title & Subhead */}
        <div className="mt-10 flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center space-x-3 text-slate-800">
            <div className="p-2 bg-slate-100 rounded-lg">
              <LayoutGrid className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-wide uppercase text-slate-800 block">Service Access Overview</span>
              <span className="text-xs text-slate-400 font-normal">Select an enterprise cluster below</span>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100/60 shadow-sm">
            {SERVICES_DATA.length} Hubs Available
          </span>
        </div>

        {/* Grid Layout */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                style={{ animationDelay: `${index * 75}ms` }}
                className="group relative flex flex-col justify-between p-7 bg-white border border-slate-200/70 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.05)] hover:border-slate-300"
              >
                <div>
                  {/* Icon Container with dynamic properties */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ring-0 group-hover:ring-4 ${service.iconBg} ${service.ringColor}`}>
                    <IconComponent className="w-5 h-5 transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed mb-8 group-hover:text-slate-600 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Call To Action Link */}
                <a
                  href={`#${service.id}`}
                  className={`inline-flex items-center text-xs font-bold uppercase tracking-wider mt-auto self-start transition-all duration-300 ${service.textColor}`}
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-current after:transition-all after:duration-300">
                    Explore Suite
                  </span>
                  <ArrowRight className="ml-2 w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Product;