import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Sleek modern icons
import { addAgent } from "../../../services/partnerServices";

const AddAgents = () => {
  const [formData, setFormData] = useState({
    fullname: "",

    phone: "",
    emailId: "",
    password: "",
    address: "",
    residenceaddress: "",
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
      // Properly assign local file payloads vs raw text values
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bundle Form Payload safely (Use FormData if sending file objects to your server)
    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      payload.append(key, formData[key]);
    });

    try {
      console.log("Submitting API Payload...", formData);

      //========================================================
      // CALL YOUR BACKEND
      // ========================================================

      try {
        const { data } = await addAgent(dataToSend);
        // console.log(data.data);
        // dispatch(setAdmin(data.data));
        // navigate("/");
      } catch (err) {
        // setError(err.response?.data?.message || "Failed to add employee");
      } finally {
        // setLoading(false);
      }

      alert("Agent registered successfully!");
    } catch (error) {
      console.error("Backend transmission failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/60 p-6 md:p-10 font-sans">
      {/* Header Container with Back Navigation Arrow */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="p-2.5 hover:bg-gray-200/80 rounded-full transition-colors duration-200 text-gray-700"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Add Agent
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Register a new profile directly into the system database.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8"
        >
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                name="fullname"
                type="text"
                value={formData.fullname}
                placeholder="Full Name"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Joining Date
              </label>
              <input
                name="joiningdate"
                type="date"
                value={formData.joiningdate}
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                State
              </label>
              <input
                name="state"
                type="text"
                value={formData.state}
                placeholder="State"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Pin Code
              </label>
              <input
                name="pincode"
                type="number"
                value={formData.pincode}
                placeholder="Pin Code"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                PAN Card Image
              </label>
              <input
                name="pancard"
                type="file"
                accept="image/*,.pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-1.5 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all shadow-sm cursor-pointer"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                type="number"
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                name="address"
                type="text"
                value={formData.address}
                placeholder="Office/Permanent Address"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            {/* Added missing markup field mapped directly to state array matching original index */}
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Residence Address
              </label>
              <input
                name="residenceaddress"
                type="text"
                value={formData.residenceaddress}
                placeholder="Current Residential Address"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                name="dateofbirth"
                type="date"
                value={formData.dateofbirth}
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                District
              </label>
              <input
                name="district"
                type="text"
                value={formData.district}
                placeholder="District"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Aadhar Front
              </label>
              <input
                name="aadharfront"
                type="file"
                accept="image/*,.pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-1.5 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all shadow-sm cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Selfie
              </label>
              <input
                name="selfie"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-1.5 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all shadow-sm cursor-pointer"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Email ID
              </label>
              <input
                name="emailId"
                type="email"
                value={formData.emailId}
                placeholder="Email ID"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Designation Name
              </label>
              <input
                name="designationname"
                type="text"
                value={formData.designationname}
                placeholder="Designation Name"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Father Name
              </label>
              <input
                name="fathername"
                type="text"
                value={formData.fathername}
                placeholder="Father Name"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                City
              </label>
              <input
                name="city"
                type="text"
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Aadhar Back
              </label>
              <input
                name="aadharback"
                type="file"
                accept="image/*,.pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-1.5 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all shadow-sm cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-semibold text-gray-700">
                Signature
              </label>
              <input
                name="signature"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-1.5 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all shadow-sm cursor-pointer"
              />
            </div>

            {/* Submit Action Block */}
            <div className="pt-4 mt-auto">
              <button
                type="submit"
                className="w-full bg-purple-900 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
              >
                Save Profile
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAgents;
