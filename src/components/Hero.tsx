"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image from public/images/backg.jpeg */}
      <Image
        src="/Hero_Assests/backg.jpeg"
        alt="Apstronics - Deep Tech Innovation"
        fill
        priority
        quality={95}
        className="object-cover"
      />

      {/* Dark overlay – makes text readable on any image */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Optional: Subtle floating glows (remove if you want pure clean look) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tight leading-none">
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
            Apstronics
          </span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          Pioneering <span className="text-cyan-300 font-bold">Deep-Tech Innovation</span> in
          Industrial Automation, Embedded Systems, IoT & Drone Technology
        </p>

        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          From concept to reality — we design, develop, and deploy cutting-edge solutions that shape the future.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="group px-10 py-5 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Explore Our Work
            <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/contact"
            className="px-10 py-5 border-2 border-white/60 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/40 shadow-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
















































