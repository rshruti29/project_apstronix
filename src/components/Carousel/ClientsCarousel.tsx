"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const clients = [
  { name: "IIT INDORE", logo: "/clients/IIT INDORE.png" },
  { name: "IIT ROPAR", logo: "/clients/IIT ROPAR.png" },
  { name: "NIT ROURKELA", logo: "/clients/NIT ROURKELA.png" },
  { name: "SNU", logo: "/clients/SNU.png" },
  { name: "VIT AP", logo: "/clients/VIT.png" },
  { name: "IIT ROORKEE", logo: "/clients/IIT ROORKEE.png" },
  { name: "IIT BHU", logo: "/clients/IIT BHU.png" },
  { name: "SLM", logo: "/clients/SLM.png" },
  { name: "NIT WARANGAL", logo: "/clients/NIT WARANGAL.png" },
  { name: "IIT JODHPUR", logo: "/clients/IIT JODHPUR.png" },
  { name: "Ewarn System Pvt Ltd", logo: "/clients/EWARN.png" },
  { name: "lota Design & Innovation Pvt Ltd", logo: "/clients/LOTA.png" },
];

export default function ClientsCarousel() {
  return (
    <div id="clients" className="w-full bg-white/70 pt-10 pb-1">

      {/* Heading */}
      <h2 className="text-center text-black text-5xl font-bold pt-5 mb-12">
        Our Clients
      </h2>


      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="px-6 "
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center group py-10">
              {/* Larger Logo Box */}
              <div className="w-44 h-44 flex items-center justify-center rounded-2xl bg-white shadow-md border border-gray-200 hover:border-cyan-400 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <p className="mt-4 text-black text-lg font-semibold group-hover:text-cyan-500 transition">
                {client.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
