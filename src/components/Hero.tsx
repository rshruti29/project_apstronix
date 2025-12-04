"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen sm:h-[90vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Background Image — Now Sharp */}
      <Image
        src="/Hero_Assests/white.jpg"
        alt="Apstronics - Deep Tech Innovation"
        fill
        priority
        quality={100}
        className="object-cover !scale-100 !blur-0"
      />

      {/* Light Overlay (30% instead of 60%) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Soft Glows — Reduced blur & opacity */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-5 left-5 
        w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 
        bg-blue-500/40 rounded-full blur-xl animate-pulse" />

        <div className="absolute bottom-10 right-10 
        w-32 h-32 sm:w-56 sm:h-56 md:w-80 md:h-80 
        bg-cyan-500/40 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Apstronics
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto leading-relaxed">
          Pioneering{" "}
          <span className="text-cyan-300 font-bold">Deep-Tech Innovation</span>{" "}
          in Industrial Automation, Embedded Systems, IoT & Drone Technology
        </p>

        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          From concept to reality — we design, develop, and deploy cutting-edge solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="group px-8 py-4 sm:px-10 sm:py-5 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2 sm:gap-3"
          >
            Explore Our Work
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/contact"
            className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-white/60 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/40 shadow-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>

    </div>
  );
};

export default Hero;
