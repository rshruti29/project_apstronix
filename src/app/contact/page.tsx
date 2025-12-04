"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        alert("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", contact: "", query: "" });
      })
      .catch(() => {
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <main>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 flex flex-col">
      {/* === Contact Form Section === */}
      <div className="flex-grow py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 pt-14 text-gray-900">
            Contact Us
          </h1>

          <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* === Name Field === */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* === Contact Field === */}
              <div className="mb-6">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              {/* === Query Field === */}
              <div className="mb-6">
                <label
                  htmlFor="query"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Your Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Enter your query"
                  required
                />
              </div>

              {/* === Submit Button === */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>

          {/* === Support Message === */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3 text-base sm:text-lg">
              The best way to reach us is through our support channel.
            </p>
            
          </div>
        </div>
      </div>

      
              
             
    </div>
     <Footer/>
    </main>
  );
}