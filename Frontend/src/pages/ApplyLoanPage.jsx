import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Local standalone dropdown options array
const LOAN_OPTIONS = [
  { id: 'personal', title: 'Personal Loan' },
  { id: 'business', title: 'Business Loan' },
  { id: 'home', title: 'Home Loan' },
  { id: 'education', title: 'Education Loan' },
  { id: 'car', title: 'Car Loan' },
  { id: 'gold', title: 'Gold Loan' },
  { id: 'lap', title: 'Loan Against Property' }
];

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize react-hook-form with all requested fields
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange', // Validates inputs instantly as the user types
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      loanAmount: '',
      loanType: 'Personal Loan'
    }
  });

  // Handle form submission locally
  const onSubmit = (data) => {
    const payload = {
      ...data,
      loanAmount: Number(data.loanAmount) // Convert string amount to number
    };
    console.log('Form Submitted successfully:', payload);
    setIsSubmitted(true);
  };

  // Reset form state to start over
  const handleBackToHome = () => {
    reset();
    setIsSubmitted(false);
  };

  // Success / Thank You View
  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center py-24 px-4 animate-[fadeIn_0.3s_ease]">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Application Received!</h2>
        <p className="text-slate-500 mb-6">Our team will call you within 2 hours.</p>
        <button 
          onClick={handleBackToHome} 
          className="bg-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg cursor-pointer"
        >
          Apply Again
        </button>
      </div>
    );
  }

  // Form View
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="text-white p-8 bg-gradient-to-r from-blue-800 to-blue-600">
          <h1 className="text-2xl font-bold">Apply for a Loan</h1>
          <p className="text-blue-100 text-sm mt-1">Fill out the form below to get instant approvals</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
            <input 
              type="text" 
              className={`w-full border rounded-xl px-4 py-3 outline-none transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-blue-500'
              }`}
              placeholder="Enter your full name" 
              {...register('name', { 
                required: 'Full name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters long' },
                pattern: { value: /^[a-zA-Z\s]+$/, message: 'Name can only contain alphabets and spaces' }
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.name.message}</p>
            )}
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mobile Number *</label>
            <input 
              type="tel" 
              className={`w-full border rounded-xl px-4 py-3 outline-none transition-colors ${
                errors.phone ? 'border-red-500 focus:border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-blue-500'
              }`}
              placeholder="10-digit mobile number" 
              {...register('phone', { 
                required: 'Mobile number is required',
                pattern: { value: /^[6-9]\d{9}$/, message: 'Please enter a valid 10-digit Indian mobile number' }
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.phone.message}</p>
            )}
          </div>

          {/* City Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">City *</label>
            <input 
              type="text" 
              className={`w-full border rounded-xl px-4 py-3 outline-none transition-colors ${
                errors.city ? 'border-red-500 focus:border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-blue-500'
              }`}
              placeholder="Enter your current city" 
              {...register('city', { 
                required: 'City name is required',
                minLength: { value: 2, message: 'City must be at least 2 characters long' },
                pattern: { value: /^[a-zA-Z\s]+$/, message: 'City can only contain alphabets and spaces' }
              })}
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.city.message}</p>
            )}
          </div>

          {/* Loan Amount Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Required Loan Amount (₹) *</label>
            <input 
              type="number" 
              className={`w-full border rounded-xl px-4 py-3 outline-none transition-colors ${
                errors.loanAmount ? 'border-red-500 focus:border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-blue-500'
              }`}
              placeholder="e.g. 500000" 
              {...register('loanAmount', { 
                required: 'Loan amount is required',
                min: { value: 10000, message: 'Minimum loan amount is ₹10,000' },
                max: { value: 100000000, message: 'Maximum loan amount is ₹10 Crores' }
              })}
            />
            {errors.loanAmount && (
              <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.loanAmount.message}</p>
            )}
          </div>

          {/* Loan Type Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Loan Type *</label>
            <select 
              className="w-full border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 bg-white outline-none cursor-pointer transition-colors"
              {...register('loanType', { required: true })}
            >
              {LOAN_OPTIONS.map(l => (
                <option key={l.id} value={l.title}>{l.title}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={!isValid} 
            className="w-full bg-blue-700 text-white py-3.5 rounded-xl font-bold  disabled:cursor-not-allowed shadow-lg hover:bg-blue-800 transition-all cursor-pointer text-center mt-2"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}