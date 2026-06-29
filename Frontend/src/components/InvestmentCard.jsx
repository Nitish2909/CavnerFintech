import React from 'react';

const InvestmentCard = ({ Investment }) => {
  // Dynamic image dictionary matching array names to premium stock imagery
  const imageMapping = {
    'Mutual Funds': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&auto=format&fit=crop&q=80',
    'Systematic Investment Plan': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80',
    'Fixed Deposit': 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&auto=format&fit=crop&q=80',
    'Government Bonds': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&auto=format&fit=crop&q=80',
    'Certificate of Deposit (CDs)': 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&auto=format&fit=crop&q=80',
    'Stock Investment': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80',
  };

  // Clean trailing spaces from names if any exist in data asset strings
  const cleanedName = Investment.name?.trim();

  // Pick the mapped image or use Investment.image, fallback to a global finance chart asset
  const finalImageSrc = 
    imageMapping[cleanedName] || 
    Investment.image || 
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&auto=format&fit=crop&q=80';

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&auto=format&fit=crop&q=80';
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-sm p-8 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center border border-slate-200/60 overflow-hidden group hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300">
      
      {/* Top-Right Arrow Badge */}
      <div className="absolute top-0 right-0 w-14 h-14 bg-slate-200/70 rounded-bl-2xl flex items-center justify-center cursor-pointer group-hover:bg-indigo-600 transition-colors duration-300">
        <span className="text-slate-700 text-lg group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
          ➔
        </span>
      </div>

      {/* Center Illustration Circle - Filled Completely */}
      <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-4 ring-slate-100 mb-6 mt-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <img 
          src={finalImageSrc} 
          alt={`${Investment.name} Illustration`} 
          onError={handleImageError}
          className="w-full h-full object-cover" // Fixed: Filled inside circle without squishing
        />
      </div>

      {/* Card Content */}
      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors duration-200">
        {Investment.name}
      </h3>
      
      <p className="text-slate-600 leading-relaxed text-[14px] font-normal px-2">
        {Investment.description}
      </p>
      
    </div>
  );
};

export default InvestmentCard;