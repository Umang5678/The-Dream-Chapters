"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    venue: "",
    eventType: "",
    budget: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        venue: "",
        eventType: "",
        budget: "",
        notes: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
   

      <section className="py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2
  className="text-2xl font-bold mb-5 text-black"
  style={{
    fontFamily:
      "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
    fontWeight: 100,
  }}
>
  Contact us about anything related to our company or services.
  We&apos;ll do our best to get back to you as soon as possible.
</h2>

            {submitSuccess && (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
    Thank you for your message! We&apos;ll get back to you shortly.
  </div>
)}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              style={{
                fontFamily:
                  "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
                fontWeight: 300,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2  focus:ring-purple-600 ">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Type of Event <span className="text-red-500">*</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm 
             text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 transition duration-200 ease-in-out"
                >
                  <option value="">Select</option>
                  <option value="engagement">Engagement</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                  <option value="birthday">Birthday</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Budget *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm 
             text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 transition duration-200 ease-in-out"
                >
                  <option value="">Select</option>
                  <option value="<15L">Less than 15 Lakhs</option>
                  <option value="15-30L">15 - 30 Lakhs</option>
                  <option value="30-50L">30 - 50 Lakhs</option>
                  <option value="50L+">50 Lakhs +</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Notes *</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-purple-600 
             focus:border-purple-600 shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-35">
            <h2
              className="text-3xl font-bold mb-6 text-black"
              style={{
                fontFamily:
                  "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
                fontWeight: 500,
              }}
            >
              The Dream Chapters
            </h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>B-344, Sumel 7, Soni Ki Chali, Rakhiyal, Ahmedabad</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 " />
                <span>+91-90818 17657</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 " />
                <span>thedreamchapters.events@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
