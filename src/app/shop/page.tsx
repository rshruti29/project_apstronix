"use client";

import React from "react";
import Footer from "@/components/Footer";

function Page() {
  return (
    <main>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ">
      <h1 className="text-gray-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-center font-[Poppins]">
        {"COMING SOON...".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-wave"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
    <Footer/>
    </main>
  );
}

export default Page;
































