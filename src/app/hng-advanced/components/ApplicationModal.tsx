'use client';

import { useState, useEffect } from 'react';
import EnhancedButton from './EnhancedButton';

interface ApplicationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  preSelectedTrack?: string;
}

export default function ApplicationModal({ isOpen = false, onClose, preSelectedTrack }: ApplicationModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    hngId: '',
    track: preSelectedTrack || '',
    motivation: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const tracks = [
    "UI Design",
    "Graphics Design", 
    "Frontend Development",
    "Backend Development",
    "QA Testing",
    "Product Management",
    "Sales & Marketing",
    "Video Editing",
    "DevOps",
    "Data Analysis",
    "Context Engineering",
    "Growth Marketing",
    "Admin Roles"
  ];

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (preSelectedTrack) {
      setFormData(prev => ({ ...prev, track: preSelectedTrack }));
    }
  }, [preSelectedTrack]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.hngId.trim()) {
      newErrors.hngId = 'HNGi11 ID is required';
    }

    if (!formData.track) {
      newErrors.track = 'Please select a track';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Handle form submission here
    console.log('Application submitted:', formData);
    
    // Close modal and reset form
    handleClose();
    
    // You could add a success toast/notification here
    alert('Application submitted successfully! We\'ll be in touch soon.');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      hngId: '',
      track: preSelectedTrack || '',
      motivation: ''
    });
    setErrors({});
    if (onClose) {
      onClose();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Join HNG Advanced
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-light transition-colors"
          >
            ×
          </button>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all duration-300 transform focus:scale-105 ${
                errors.fullName ? 'border-red-500 animate-shake' : 'border-gray-300 focus:border-[#38BDF8]'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* HNGi11 ID */}
          <div>
            <label htmlFor="hngId" className="block text-sm font-medium text-gray-700 mb-2">
              HNGi11 ID *
            </label>
            <input
              type="text"
              id="hngId"
              name="hngId"
              value={formData.hngId}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all ${
                errors.hngId ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your HNGi11 participant ID"
            />
            {errors.hngId && <p className="mt-1 text-sm text-red-500">{errors.hngId}</p>}
          </div>

          {/* Track Selection */}
          <div>
            <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
              Choose Track *
            </label>
            <select
              id="track"
              name="track"
              value={formData.track}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all ${
                errors.track ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your specialization</option>
              {tracks.map((track) => (
                <option key={track} value={track}>
                  {track}
                </option>
              ))}
            </select>
            {errors.track && <p className="mt-1 text-sm text-red-500">{errors.track}</p>}
          </div>

          {/* Motivation (Optional) */}
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
              Short Motivation (Optional)
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all resize-none"
              placeholder="Why do you want to join HNG Advanced? (Optional)"
            />
          </div>

          {/* Enhanced Submit Button */}
          <EnhancedButton
            variant="primary"
            size="lg"
            className="w-full py-4 text-lg"
            icon="🚀"
          >
            Join HNG Advanced
          </EnhancedButton>
        </form>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          By applying, you confirm that you were a participant in HNGi11 and agree to the program terms.
        </p>
      </div>
    </div>
  );
}