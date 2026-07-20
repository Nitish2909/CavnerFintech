import React, { useState } from "react";
import { ArrowLeft, ArrowRight, UserPlus } from "lucide-react"; // Using lucide-react for sharp modern icons
import { addEmployee } from "../../../services/partnerServices";

const AddEmployees = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    emailId: "",
    password: "",
    address: "",
    designationname: "",
    joiningdate: "",
    dateofbirth: "",
    fathername: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    aadharfront: null,
    aadharback: null,
    pancard: null,
    selfie: null,
    signature: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      // Properly handle file uploads instead of treating them as text strings
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object if you are sending files to your backend API
    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    try {
      console.log("Submitting form data...", formData);
      
       //=================================
      //CALL YOUR BACKEND API
      //==================================
      try {
        const { data } = await addEmployee(dataToSend);
        console.log(data.data);
        // dispatch(setAdmin(data.data));
        // navigate("/");
      } catch (err) {
        // setError(err.response?.data?.message || "Failed to add employee");
      } finally {
        // setLoading(false);
      }

      alert("Employee request submitted successfully!");
    } catch (error) {
      console.error("Error calling backend API:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-sans">
      {/* Header Section with Back Arrow */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 hover:bg-gray-200/70 rounded-full transition-colors duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-purple-700" /> Add New Employee
            </h1>
            <p className="text-sm text-gray-500">
              Fill out the information below to register a new staff member.
            </p>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-8"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Personal & Account Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                Personal Details
              </h3>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Father's Name
                </label>
                <input
                  name="fathername"
                  type="text"
                  value={formData.fathername}
                  placeholder="Father's Name"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Email ID
                </label>
                <input
                  name="emailId"
                  type="email"
                  value={formData.emailId}
                  placeholder="name@company.com"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="number"
                  value={formData.phone}
                  placeholder="9876543210"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Designation Name
                </label>
                <input
                  name="designationname"
                  type="text"
                  value={formData.designationname}
                  placeholder="Software Engineer"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Column 2: Dates & Complete Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                Work & Location
              </h3>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Joining Date
                </label>
                <input
                  name="joiningdate"
                  type="date"
                  value={formData.joiningdate}
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Date of Birth
                </label>
                <input
                  name="dateofbirth"
                  type="date"
                  value={formData.dateofbirth}
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Street Address
                </label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  placeholder="123 Main St"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  placeholder="City"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-600">
                    District
                  </label>
                  <input
                    name="district"
                    type="text"
                    value={formData.district}
                    placeholder="District"
                    onChange={handleChange}
                    className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-600">
                    State
                  </label>
                  <input
                    name="state"
                    type="text"
                    value={formData.state}
                    placeholder="State"
                    onChange={handleChange}
                    className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Pin Code
                </label>
                <input
                  name="pincode"
                  type="number"
                  value={formData.pincode}
                  placeholder="110001"
                  onChange={handleChange}
                  className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Column 3: Identity & Verification Documents */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                KYC Documents
              </h3>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Identity Doc Front
                </label>
                <input
                  name="aadharfront"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg p-1"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Identity Doc Back
                </label>
                <input
                  name="aadharback"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg p-1"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  PAN Card Image
                </label>
                <input
                  name="pancard"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg p-1"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Selfie Photo
                </label>
                <input
                  name="selfie"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg p-1"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Signature
                </label>
                <input
                  name="signature"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg p-1"
                />
              </div>

              {/* Submit Button Container */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-purple-950 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-purple-950/20 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 group"
                >
                  Save Employee
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployees;
