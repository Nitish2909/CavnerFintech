import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/offers';
// const IMAGE_BASE_URL = 'http://localhost:5000';

export default function offers() {
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
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            {/* Gift Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a2 2 0 100-4H4a2 2 0 100 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Offers</h1>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-4 py-2 rounded-md flex items-center transition-colors"
        >
          <span className="mr-1 text-lg">+</span> Add Offer
        </button>
      </div>

      {/* Main Table Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">S.NO</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Offer For</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Title</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Image</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Start Date</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">End Date</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Coupon Code</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Description</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Type</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Url</th>
                <th className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">Offer Type</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Pop Up</th>
              </tr>
            </thead>
            <tbody>
              {offers.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center p-8 text-gray-500 font-medium">
                    No matching record found
                  </td>
                </tr>
              ) : (
                offers.map((offer, index) => (
                  <tr key={offer._id} className="border-b border-gray-100 hover:bg-gray-50 text-sm text-gray-600">
                    <td className="p-4 border-r border-gray-100">{index + 1}</td>
                    <td className="p-4 border-r border-gray-100">{offer.offerFor}</td>
                    <td className="p-4 border-r border-gray-100 font-medium text-gray-800">{offer.title}</td>
                    <td className="p-4 border-r border-gray-100">
                      {offer.image ? (
                        <img src={`${IMAGE_BASE_URL}${offer.image}`} alt={offer.title} className="h-10 w-14 object-cover rounded border" />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="p-4 border-r border-gray-100">{new Date(offer.startDate).toLocaleDateString()}</td>
                    <td className="p-4 border-r border-gray-100">{new Date(offer.endDate).toLocaleDateString()}</td>
                    <td className="p-4 border-r border-gray-100 font-mono">{offer.couponCode || '-'}</td>
                    <td className="p-4 border-r border-gray-100 max-w-xs truncate">{offer.description || '-'}</td>
                    <td className="p-4 border-r border-gray-100">{offer.type}</td>
                    <td className="p-4 border-r border-gray-100 truncate max-w-xs">{offer.url ? <a href={offer.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">{offer.url}</a> : '-'}</td>
                    <td className="p-4 border-r border-gray-100">{offer.offerType}</td>
                    <td className="p-4">-</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Offer Modal Backdrop */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {/* Modal content element */}
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Add New Offer</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl font-semibold">&times;</button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Offer For */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Offer For</label>
                  <select name="offerFor" value={formData.offerFor} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm">
                    <option value="">Select</option>
                    <option value="All Users">All Users</option>
                    <option value="Premium Users">Premium Users</option>
                    <option value="New Users">New Users</option>
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm" />
                </div>

                {/* Image */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Image</label>
                  <input type="file" onChange={handleFileChange} className="w-full border border-gray-300 rounded-md p-1.5 focus:outline-none text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm text-gray-500" />
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">End Date</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm text-gray-500" />
                </div>

                {/* Coupon Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Coupon Code</label>
                  <input type="text" name="couponCode" value={formData.couponCode} onChange={handleInputChange} placeholder="Coupon Code" className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm" />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Description</label>
                  <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm" />
                </div>

                {/* Url */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Url</label>
                  <input type="url" name="url" value={formData.url} onChange={handleInputChange} placeholder="Url" className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm" />
                </div>

                {/* Offer Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Offer Type</label>
                  <select name="offerType" value={formData.offerType} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm">
                    <option value="">Select</option>
                    <option value="Discount">Discount</option>
                    <option value="Cashback">Cashback</option>
                    <option value="Freebie">Freebie</option>
                  </select>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm">
                    <option value="">Select</option>
                    <option value="Percentage">Percentage</option>
                    <option value="Flat Rate">Flat Rate</option>
                  </select>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm shadow-sm"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}