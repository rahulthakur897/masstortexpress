"use client"
import React, { useState, useEffect, useRef } from "react";

export const ContactForm = ({ formType }) => {
  const fullNameRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (window.location.hash === "#contact" && fullNameRef.current) {
      fullNameRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div id="contact" className="text-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Get Your Free Case Review Today
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <input
            ref={fullNameRef}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            placeholder="Full Name"
          />
          <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            placeholder="Email"
          />
          <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
            Email
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            placeholder="Contact Number"
          />
          <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
            Contact Number
          </label>
        </div>

        {(formType === "CampLejeune" ||
          formType === "AutoVehicleAccident" ||
          formType === "ParaquatLawsuit") ? <div className="relative">
          <select
            name="qualifier"
            value={formData.qualifier}
            onChange={handleChange}
            className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
            Have your read the qualifier questions ?:
          </label>
        </div> : null}

        {formType === "MesotheliomaLungCancer" ? <>
          <div className="relative">
            <select
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            >
              <option value="">Select a diagnosis</option>
              <option value="Mesothelioma">Mesothelioma</option>
              <option value="Lung Cancer">Lung Cancer</option>
              <option value="Asbestosis">Asbestosis</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="relative">
            <select
              name="qualifier"
              value={formData.qualifier}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
              Have your read the qualifier questions ?:
            </label>
          </div>
        </> : null}

        {formType === "Contact" ? <div className="relative">
          <select
            name="caseType"
            value={formData.caseType}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 py-2 bg-transparent focus:border-green-700 outline-none"
          >
            <option className="text-gray-300" value="">
              Select Class Action / Mass Tort
            </option>
            <option value="Paraquat Lawsuit">Paraquat Lawsuit</option>
            <option value="Camp Lejeune Water Contamination">Camp Lejeune Water Contamination</option>
            <option value="Car or Truck Accident">Car or Truck Accident</option>
            <option value="Mesothelioma and Lung Cancer">Mesothelioma and Lung Cancer</option>
            <option value="NEC Infant Formula">NEC Infant Formula</option>
            <option value="Roundup Lawsuit">Roundup Lawsuit</option>
            <option value="Talcum Powder Lawsuit">Talcum Powder Lawsuit</option>
            <option value="Other/General Inquiry">Other/General Inquiry</option>
          </select>
        </div> : null}


        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder=" "
            className="peer w-full border-2 border-gray-300 py-3 px-3 text-gray-900 outline-none resize-none
               placeholder-transparent focus:border-green-700 transition-colors"
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-3 text-gray-500 text-base transition-all
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-700
               peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm
               bg-white px-1 pointer-events-none"
          >
            Let us know what you’re looking for...
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
