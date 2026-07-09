import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 border-b border-[#e4e7ec] mb-6">
      <button
        onClick={() => setActiveTab('use-services')}
        className={`pb-3 text-sm font-medium transition-all relative px-1 ${
          activeTab === 'use-services' ? 'text-[#0e56cc]' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Use Services
        {activeTab === 'use-services' && (
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0e56cc] rounded-t-full" />
        )}
      </button>
      <button
        onClick={() => setActiveTab('quick-products')}
        className={`pb-3 text-sm font-medium transition-all relative px-1 ${
          activeTab === 'quick-products' ? 'text-[#0e56cc]' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        Quick Products
        {activeTab === 'quick-products' && (
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0e56cc] rounded-t-full" />
        )}
      </button>
    </div>
  );
}
