"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const menuVariants = {
  open: { opacity: 1, y: 0, pointerEvents: "auto" as const },
  closed: { opacity: 0, y: -12, pointerEvents: "none" as const },
};

const navItems = [
  { label: "ABOUT US", path: "#About" },
  { label: "CAREER", path: "/career" },
  { label: "CONTACT US", path: "/contact" },
  { label: "OUR CLIENT", path: "#clients" },
  { label: "PRODUCT", path: "/product" },
  { label: "SHOP", path: "/shop" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSmoothScroll = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith("#")) {
      const el = document.getElementById(path.substring(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="
            pointer-events-auto flex items-center justify-between
            bg-[#b5a1e02f] backdrop-blur-md shadow-xl
            ring-1 ring-white/40
            rounded-[40px] px-4 md:px-8

            /* --- MATCHED WIDTHS FROM SECOND NAVBAR --- */
            w-[95%] xs:w-[94%] sm:w-[92%] md:w-[90%] lg:w-[89%] xl:w-[86%] 2xl:w-[83%]

            h-[60px] md:h-[80px]
          "
        >
          {/* LEFT LOGO */}
          <Link
            href="/"
            className="shrink-0 flex items-center z-20"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-lg px-2 py-1 shadow-sm">
              <img
                src="/Hero_Assests/Logo.png"
                alt="Logo"
                className="h-9 sm:h-10 md:h-11 lg:h-12 object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex flex-1 justify-center overflow-hidden">
            <ul className="flex items-center gap-6 xl:gap-10 overflow-hidden">
              {navItems.map((item) => (
                <li key={item.label} className="min-w-fit">
                  {item.path.startsWith("#") ? (
                    <button
                      onClick={() => handleSmoothScroll(item.path)}
                      className="text-black text-sm lg:text-base font-light tracking-wide hover:text-purple-300 transition"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black text-sm lg:text-base font-light tracking-wide hover:text-purple-300 transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Menu"
              className="w-10 h-10 flex flex-col justify-center items-center"
            >
              <span
                className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black my-1 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed top-[100px] left-0 w-full px-6 z-40"
      >
        <div className="bg-[#b5a1e030] backdrop-blur-xl rounded-2xl shadow-xl ring-1 ring-white/40 py-6 px-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <button
                  key={item.label}
                  onClick={() => handleSmoothScroll(item.path)}
                  className="text-lg text-black font-light tracking-wide"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-black font-light tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </motion.div>
    </>
  );
}
