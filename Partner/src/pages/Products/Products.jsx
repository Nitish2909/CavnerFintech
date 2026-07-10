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
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Top Header/Brand */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center space-x-3 px-1 animate-fade-in">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black rounded-xl text-base w-9 h-9 flex items-center justify-center shadow-md shadow-blue-200 transform transition-transform hover:rotate-12 duration-300">
          P
        </div>
        <span className="font-bold text-slate-800 text-xl tracking-tight">Service Portal</span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0,02)] p-5 md:p-8 transition-all duration-300">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-100 -mx-5 md:-mx-8 px-5 md:px-8 pb-4 space-x-2">
          {['use-services', 'quick-products'].map((tabId) => (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 relative capitalize ${
                activeTab === tabId
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {tabId.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Section Title & Subhead */}
        <div className="mt-8 flex items-center justify-between border-b border-slate-50 pb-4">
          <div className="flex items-center space-x-2.5 text-slate-700">
            <LayoutGrid className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-sm tracking-wide uppercase text-slate-500">Service Access</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
            {SERVICES_DATA.length} options available
          </span>
        </div>

        {/* Grid Layout with Smooth Card Entry Animations */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                style={{ animationDelay: `${index * 75}ms` }}
                className={`group relative flex flex-col justify-between p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-slate-200/80 animate-slide-up`}
              >
                <div>
                  {/* Icon Container with pop ring and invert background transition */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ring-0 group-hover:ring-4 ${service.iconBg} ${service.ringColor}`}>
                    <IconComponent className="w-5 h-5 transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight group-hover:text-slate-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-normal leading-relaxed mb-8 group-hover:text-slate-500 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Call To Action Link */}
                <a
                  href={`#${service.id}`}
                  className={`inline-flex items-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${service.textColor}`}
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-current after:transition-all after:duration-300 pb-0.5">
                    Explore Suite
                  </span>
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
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