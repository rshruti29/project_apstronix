import React from "react";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const logos = [
    { file: "FTBI.png", alt: "FTBI" },
    { file: "NITR.png", alt: "NIT Rourkela" },
    { file: "STARTUP INDIA.png", alt: "Startup India" },
    { file: "DST NIDHI.png", alt: "DST NIDHI" },
    { file: "MEITY.png", alt: "MeitY" },
    { file: "ISM.png", alt: "ISM" },
  ];

  return (
    <footer className="w-full bg-[#102E50] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">

          {/* Technical & Sales Queries */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Technical & Sales Queries
            </h3>

            <div className="space-y-4 text-left">
              <a
                href="tel:+917008717365"
                className="block text-xl text-teal-300 hover:text-teal-200 transition font-medium"
              >
                +91 70087 17365 / 88478 34048
              </a>

              <div className="text-gray-300 text-sm leading-relaxed space-y-1 pt-3">
                <p className="font-semibold text-white">
                  Apstronics Technologies Private Limited
                </p>

                {/* FIXED SPACING HERE */}
                <div className="flex items-center gap-5">
                  <p>TI-103/B, TIIR Building,</p>
                  <a
                    href="https://www.youtube.com/@apstronix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition-transform hover:scale-110 flex-shrink-0 ml-2"
                    aria-label="Apstronix YouTube Channel"
                  >
                    <FaYoutube size={28} />
                  </a>
                </div>

                <p>NIT Rourkela, Rourkela,</p>
                <p>Odisha - 769008, India</p>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center justify-center space-y-5">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Email Us
            </h3>
            <a
              href="mailto:info@apstronix.com"
              className="text-xl lg:text-2xl text-teal-300 hover:text-teal-100 transition font-medium tracking-wider"
            >
              info@apstronix.com
            </a>
          </div>

          {/* Supported By */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight text-center md:text-left">
              Supported By
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {logos.map(({ file, alt }, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="aspect-[4/3] p-4 flex items-center justify-center">
                    <img
                      src={`/logos/${file}`}
                      alt={alt}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <p className="text-center text-gray-300 text-lg">
            <span className="text-white font-semibold">Monday – Friday</span>
            <span className="mx-3 text-gray-500">•</span>
            <span className="text-white font-semibold">10:00 AM – 6:00 PM IST</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400 tracking-wider">
            © {currentYear} Apstronix Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;



































