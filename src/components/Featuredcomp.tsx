"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { events } from "@/config/mainEvents/mainEvents";
import RulebookButton from "@/components/ui/RulebookButton";
import { SwiperCarousel } from "@/components/Carousel/Carousel";

const neue = { className: "font-neue" };
const spaceGrotesk = { className: "font-space-grotesk" };

type EventType = (typeof events)[number];

const borderGradient =
  "bg-[linear-gradient(155deg,rgba(240,225,200,0.9)_0%,rgba(230,210,180,0.9)_50%,rgba(245,230,210,0.9)_100%)]";

const shadowWarm = "shadow-[0_10px_30px_rgba(180,150,110,0.25)]";

const textDark = "text-[#5a4633]";
const textSoft = "text-[#7a6653]";

const EventCard = ({ event }: { event: EventType }) => (
  <motion.div className="flex flex-col items-center">
    <motion.div
      className={`h-[460px] sm:h-[500px] w-full rounded-[44px] ${borderGradient} p-1 ${shadowWarm}
      transition-all duration-300`}
      whileHover={{
        boxShadow: "0 20px 50px rgba(180,150,110,0.35)",
      }}
    >
      <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#fffaf3] shadow-inner">
        <Image src={event.image} alt={event.name} fill className="object-cover" />
      </div>
    </motion.div>
  </motion.div>
);

const EventDetails = ({
  event,
  currentIndex,
}: {
  event: EventType;
  currentIndex: number;
}) => (
  <>
    {/* Desktop */}
    <div className="hidden lg:block">
      <motion.div
        key={`details-${currentIndex}`}
        className="relative z-10 max-w-7xl mx-auto px-8 flex items-start gap-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1">
          <h2
            className={`${textDark} text-center ${neue.className} text-6xl font-bold uppercase mb-8 tracking-wider`}
          >
            {event.name}
          </h2>

          {!event.description.includes("Lorem ipsum") && (
            <p
              className={`${textSoft} text-justify ${spaceGrotesk.className} text-lg leading-relaxed`}
            >
              {event.description}
            </p>
          )}

          {!event.rulebook.includes("example.com") && (
            <Link href={event.rulebook}>
              <div className="mt-8 flex justify-center">
                <RulebookButton size="md" />
              </div>
            </Link>
          )}
        </div>

        {/* Side image card */}
        <motion.div
          className={`flex-shrink-0 w-[350px] h-[500px] rounded-[44px] ${borderGradient} p-1 ${shadowWarm}`}
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#fffaf3] shadow-inner">
            <Image src={event.image} alt={event.name} fill className="object-cover" />
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Tablet */}
    <div className="hidden sm:block lg:hidden">
      <motion.div
        key={`details-tablet-${currentIndex}`}
        className="relative z-10 max-w-6xl mx-auto px-6 flex items-start gap-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1">
          <h2
            className={`${textDark} text-center ${neue.className} text-4xl font-bold uppercase mb-6 tracking-wider`}
          >
            {event.name}
          </h2>

          {!event.description.includes("Lorem ipsum") && (
            <p
              className={`${textSoft} text-justify ${spaceGrotesk.className} text-lg leading-relaxed`}
            >
              {event.description}
            </p>
          )}

          {!event.rulebook.includes("example.com") && (
            <Link href={event.rulebook}>
              <div className="mt-6 flex justify-center">
                <RulebookButton size="md" />
              </div>
            </Link>
          )}
        </div>

        <motion.div
          className={`flex-shrink-0 w-[280px] h-[400px] rounded-[44px] ${borderGradient} p-1 shadow-lg`}
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#fffaf3] shadow-inner">
            <Image src={event.image} alt={event.name} fill className="object-cover" />
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Mobile */}
    <div className="sm:hidden">
      <motion.div
        key={`details-mobile-${currentIndex}`}
        className="relative z-10 max-w-md mx-auto px-6 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`w-full max-w-[240px] aspect-[3/4] rounded-2xl ${borderGradient}
          p-[2px] shadow-md`}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#fffaf3] shadow-inner">
            <Image src={event.image} alt={event.name} fill className="object-cover" />
          </div>
        </motion.div>

        <div className="w-full max-w-[280px] text-center space-y-3">
          <h2
            className={`${textDark} ${neue.className} text-2xl font-bold uppercase tracking-wide`}
          >
            {event.name}
          </h2>

          {!event.description.includes("Lorem ipsum") && (
            <p
              className={`${textSoft} text-justify ${spaceGrotesk.className} text-lg leading-relaxed`}
            >
              {event.description}
            </p>
          )}

          {!event.rulebook.includes("example.com") && (
            <Link href={event.rulebook}>
              <div className="mt-4 flex justify-center">
                <RulebookButton size="md" />
              </div>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  </>
);

const FlagEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = () =>
    events.map((event) => (
      <Link key={event.id} href={`/products/${event.id}`}>
        <div className="w-[350px] cursor-pointer">
          <EventCard event={event} />
        </div>
      </Link>
    ));

  return (
    <div className="min-h-screen bg-[#FBF4ED]">
      <div className="relative overflow-hidden">
        <motion.div
          className="my-16 flex justify-center items-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`${textDark} px-5 ${neue.className} font-semibold text-center uppercase text-[28px] sm:text-[35px] md:text-[80px]`}
          >
            PRODUCTS
          </motion.h1>
        </motion.div>

        <div className="relative px-4 mb-10 lg:mb-20 z-10">
          <SwiperCarousel
            mapFunction={renderSlides}
            desktopViewClassname="mySwiper"
            mobileViewClassName="mySwiper2"
            onIndexChange={setCurrentIndex}
            isEventSection
          />
        </div>
      </div>

      <div className="pt-2 pb-24 relative">
        <EventDetails event={events[currentIndex]} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default FlagEvent;
