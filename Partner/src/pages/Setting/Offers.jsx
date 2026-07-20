import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/offers';
// const IMAGE_BASE_URL = 'http://localhost:5000';

const offers = ()=> {
  const [offers, setOffers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    offerFor: '',
    title: '',
    startDate: '',
    endDate: '',
    couponCode: '',
    description: '',
    url: '',
    offerType: '',
    type: ''
  });
  const [imageFile, setImageFile] = useState(null);

  //Fetch all records
  const fetchOffers = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setOffers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      await axios.post(API_BASE_URL, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setIsModalOpen(false);
      // Reset form fields
      setFormData({
        offerFor: '', title: '', startDate: '', endDate: '',
        couponCode: '', description: '', url: '', offerType: '', type: ''
      });
      setImageFile(null);
      fetchOffers(); // Refresh the list
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans antialiased text-slate-600">
      
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-md shadow-indigo-100">
            {/* Gift Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a2 2 0 100-4H4a2 2 0 100 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Offers Management</h1>
            <p className="text-sm text-slate-500">Create, monitor, and handle promotional deals</p>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-xl flex items-center transition-all shadow-sm shadow-indigo-100 hover:shadow-md active:scale-95"
        >
          <span className="mr-2 text-lg font-light">+</span> Add New Offer
        </button>
      </div>

      {/* Main Table Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">S.No</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Offer For</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Title</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Image</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Start Date</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">End Date</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Coupon Code</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Description</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Type</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Url</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Offer Type</th>
                <th className="p-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Pop Up</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {offers.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center py-16 text-slate-400 font-normal">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <span className="text-3xl">📁</span>
                      <span className="text-sm">No matching records found</span>
                    </div>
                  </td>
                </tr>
              ) : (
                offers.map((offer, index) => (
                  <tr key={offer._id} className="hover:bg-slate-50/80 transition-colors text-sm text-slate-600">
                    <td className="p-4 font-medium text-slate-400">{index + 1}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {offer.offerFor}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-900 max-w-xs truncate">{offer.title}</td>
                    <td className="p-4">
                      {offer.image ? (
                        <img src={`${IMAGE_BASE_URL}${offer.image}`} alt={offer.title} className="h-9 w-14 object-cover rounded-lg ring-1 ring-slate-200 shadow-sm" />
                      ) : (
                        <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded border border-dashed border-slate-200">No Image</span>
                      )}
                    </td>
                    <td className="p-4 text-slate-500">{new Date(offer.startDate).toLocaleDateString()}</td>
                    <td className="p-4 text-slate-500">{new Date(offer.endDate).toLocaleDateString()}</td>
                    <td className="p-4">
                      {offer.couponCode ? (
                        <span className="font-mono bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-semibold tracking-wider border border-indigo-100">
                          {offer.couponCode}
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="p-4 max-w-xs truncate text-slate-500">{offer.description || '-'}</td>
                    <td className="p-4">
                      <span className="text-xs font-medium bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-100">
                        {offer.type}
                      </span>
                    </td>
                    <td className="p-4 truncate max-w-xs">
                      {offer.url ? (
                        <a href={offer.url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline inline-flex items-center">
                          View Link
                        </a>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-medium bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        {offer.offerType}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">-</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Offer Modal Backdrop */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          {/* Modal Container: Optimized width & condensed layout */}
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl overflow-hidden border border-slate-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-slate-100 bg-slate-50/50">
              <div>
                <h2 className="text-sm font-bold text-slate-900">Add New Offer</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors text-lg font-medium leading-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Form: High-density 2-column layout */}
            <form onSubmit={handleSubmit} className="p-4 space-y-2.5">
              
              {/* Row 1: Title & Target Audience */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. Summer Flash Sale" required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all placeholder:text-slate-300 text-slate-800" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Offer For</label>
                  <select name="offerFor" value={formData.offerFor} onChange={handleInputChange} required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all text-slate-800">
                    <option value="">Select Audience</option>
                    <option value="All Users">All Users</option>
                    <option value="Premium Users">Premium Users</option>
                    <option value="New Users">New Users</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">End Date</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all text-slate-700" />
                </div>
              </div>

              {/* Row 3: Offer Type & Calculation Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Offer Type</label>
                  <select name="offerType" value={formData.offerType} onChange={handleInputChange} required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all text-slate-800">
                    <option value="">Select Category</option>
                    <option value="Discount">Discount</option>
                    <option value="Cashback">Cashback</option>
                    <option value="Freebie">Freebie</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Reward Unit</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} required className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all text-slate-800">
                    <option value="">Select Calculation</option>
                    <option value="Percentage">Percentage (%)</option>
                    <option value="Flat Rate">Flat Rate ($)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Coupon Code & Description */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Coupon Code</label>
                  <input type="text" name="couponCode" value={formData.couponCode} onChange={handleInputChange} placeholder="SUMMER50" className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all placeholder:text-slate-300 text-slate-800 font-mono" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Description</label>
                  <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Brief promotion terms..." className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all placeholder:text-slate-300 text-slate-800" />
                </div>
              </div>

              {/* Row 5: Destination URL & Banner upload side-by-side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Destination URL</label>
                  <input type="url" name="url" value={formData.url} onChange={handleInputChange} placeholder="https://example.com/promo" className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none text-xs transition-all placeholder:text-slate-300 text-slate-800" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Banner Image</label>
                  <input type="file" onChange={handleFileChange} className="w-full border border-slate-200 rounded-lg p-1 bg-slate-50 focus:outline-none text-[11px] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 text-slate-400 cursor-pointer transition-all" />
                </div>
              </div>

              {/* Submit & Cancel Actions */}
              <div className="flex justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1.5 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-1.5 rounded-lg transition-all text-xs shadow-sm shadow-indigo-100 hover:shadow active:scale-95"
                >
                  Create Offer
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default offers