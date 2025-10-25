"use client"
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = ({ title, caseType }) => {
   const name = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    case_type: caseType !=='' ? caseType: "",
    query: "",
  });
const [response, setResponse] = useState("");
  useEffect(() => {
    if (window.location.hash === "#contact" && name.current) {
      name.current.focus();
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

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost/anurag/masstortexpress/api/add-query.php",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      setResponse(res?.data?.message || "Query submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        company: "",
        case_type: caseType !== "" ? caseType : "",
        query: "",
      });
      toast.success(response || "")  
    } else {
      setResponse(res?.data?.message || "Submission failed!");
      toast.error(response || "")  
    }
      toast.success(response || "")   
  } catch (error) {
    console.error("API Error:", error);
    setResponse(
      `Error: ${
        error.response?.data?.error || error.message || "Something went wrong!"
      }`
    );
  }
};

  return (
    <div id="contact" className="text-gray-900">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          {title}
        </h2>
      )}
              
 <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <input
            ref={name}
            type="text"
            name="name"
            value={formData.name ||""}
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
            value={formData.email ||""}
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

        {/* contact */}
        <div className="relative">
          <input
            type="text"
            name="contact"
            value={formData.contact ||""}
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

        {/* Company */}
        <div className="relative">
          <input
            type="text"
            name="company"
            value={formData.company ||""}
            onChange={handleChange}
            className="peer w-full border-b-2 border-gray-300 py-2 text-gray-900 placeholder-transparent focus:border-green-700 outline-none"
            placeholder="Company"
          />
          <label className="absolute left-0 -top-3.5 text-sm text-green-700 transition-all 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-green-700 peer-focus:text-sm">
            Company
          </label>
        </div>

        {/* Dropdown: Case Type */}
        <div className="relative">
          <select
            name="case_type"
            value={formData.case_type}
            onChange={handleChange}
            required
            className="peer w-full border-b-2 border-gray-300 py-2 bg-transparent focus:border-green-700 outline-none"
          >
            <option className="text-gray-300" value="" disabled hidden>
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
        </div>


        <div className="relative w-full">
          <textarea
            id="query"
            name="query"
            value={formData.query ||""}
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
     {response !=''? <ToastContainer position="top-right" autoClose={3000} /> :""}
    </div>
  );
};
