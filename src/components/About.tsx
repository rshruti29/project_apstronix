"use client";
import React, { useState, useEffect, useRef } from "react";
import { Poppins, Space_Grotesk } from "next/font/google";

// === Google Fonts ===
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
});

function CountUp({
  end,
  trigger,
  suffix = "",
}: {
  end: number;
  trigger: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    setCount(0);
    let current = 0;
    const increment = Math.ceil(end / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [end, trigger]);

  return <span>{count.toLocaleString() + suffix}</span>;
}

function About() {
  const [triggerCount, setTriggerCount] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerCount(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
   <section
  id="About"
  className={`${poppins.variable} ${spaceGrotesk.variable} min-h-screen bg-[#fbf4ed] py-16 px-6`}
>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* === Heading === */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-amber-900 font-poppins tracking-tight drop-shadow-sm">
            About Us
          </h1>
        </div>

        {/* === About Content === */}
        <div className="space-y-6 text-gray-700 font-space-grotesk leading-relaxed text-lg">
          <p>
            <strong className="text-amber-900">
              Apstronics Technologies Private Limited
            </strong>{" "}
            is a deep-tech company focused on delivering innovative solutions in
            the fields of industrial automation, embedded systems, IoT, UAV
            (Drone) technologies, and customized R&D product development.
          </p>
          <p>
            Founded and incubated at <strong className="text-amber-900">FTBI, NIT Rourkela</strong>,
            Apstronics is driven by a strong vision to bridge the gap between
            practical industrial challenges and innovative technological
            solutions. We specialize in the end-to-end design, development, and
            manufacturing of customized solutions tailored to the unique needs
            of industries, research institutes, and startups.
          </p>
          <p>
            At Apstronics, we believe in{" "}
            <strong className="text-amber-900">
              Make in India, Design in India, and Innovate for the World
            </strong>
            . Every product and solution we build reflects our strong emphasis
            on quality, performance, and long-term reliability.
          </p>
        </div>

        {/* === Vision & Mission === */}
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-4 font-poppins text-center">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed font-space-grotesk">
              To become a globally recognized technology partner, delivering
              high-end, innovative, and reliable solutions that contribute to
              industrial growth, safety, and sustainability.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-4 font-poppins text-center">
              Our Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-space-grotesk">
              <li>
                Provide customized automation, embedded, and sensing solutions
                across industries
              </li>
              <li>
                Offer end-to-end product design, prototyping, and manufacturing
                services
              </li>
              <li>
                Foster research, innovation, and skill development among young
                engineers
              </li>
              <li>
                Continuously improve through R&D and practical field deployments
              </li>
            </ul>
          </div>
        </div>

        {/* === Core Expertise === */}
        <div>
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center font-poppins drop-shadow-sm">
            Our Core Areas of Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Industrial Automation",
              "Embedded Systems",
              "IoT & Wireless Solutions",
              "Drone & UAV Tech",
              "Sensor Integration",
              "Environmental Monitoring",
              "Photocatalytic Reactors",
              "Custom Prototyping",
            ].map((area) => (
              <div
                key={area}
                className="bg-white/60 backdrop-blur-sm p-4 rounded-lg text-center border border-amber-200 hover:bg-white/80 hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-800 font-medium font-space-grotesk">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* === Why Choose Us === */}
        <div>
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center font-poppins drop-shadow-sm">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "100% In-house Design",
              "Customized Solutions",
              "Strong R&D Capabilities",
              "Industry Collaboration",
              "Professional Team",
              "Quality & Reliability",
            ].map((reason) => (
              <div
                key={reason}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-center border border-amber-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <p className="text-gray-800 font-semibold text-lg font-space-grotesk">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Closing Statement === */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl text-center border border-amber-200 shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed font-space-grotesk">
            We are committed to delivering technology that works — solutions
            that are practical, scalable, and built to perform. From initial
            concept to full-scale deployment,{" "}
            <strong className="text-amber-900">Apstronics</strong> stands with its
            clients at every step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;