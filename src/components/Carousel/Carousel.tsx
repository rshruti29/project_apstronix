"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

import {
  ScreenViewContainer,
  SliderContainer,
  Wrapper,
} from "./Carousel.styles";

import { LeftArrowButton, RightArrowButton } from "./ArrowButton";

import "swiper/css";
import "swiper/css/pagination";

interface SwiperCarouselProps {
  mapFunction: (() => React.ReactNode[]) | React.ReactNode[];
  mobileViewClassName?: string;
  desktopViewClassname?: string;
  onIndexChange?: (index: number) => void;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  mapFunction,
  mobileViewClassName,
  desktopViewClassname,
  onIndexChange,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();

  const slides =
    typeof mapFunction === "function"
      ? mapFunction()
      : (mapFunction as React.ReactNode[]);

  return (
    <Wrapper>
      <ScreenViewContainer>

        {/* Desktop arrows */}
        <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <LeftArrowButton onClick={handlePrev} />
        </div>

        <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <RightArrowButton onClick={handleNext} />
        </div>

        {/* Mobile arrows BELOW carousel */}
        <div className="flex md:hidden justify-between w-full px-6 mb-2 mt-2">
          <LeftArrowButton onClick={handlePrev} />
          <RightArrowButton onClick={handleNext} />
        </div>

        <SliderContainer>
          <Swiper
            ref={swiperRef}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              // 📱 EXTRA SMALL 320–360px
              0: {
                slidesPerView: 0.95,
                spaceBetween: 6,
              },

              // 📱 375px screens (iPhone SE/11/12/13 mini)
              360: {
                slidesPerView: 1.05,
                spaceBetween: 8,
              },

              // 📱 390–412px screens
              390: {
                slidesPerView: 1.15,
                spaceBetween: 10,
              },

              // 📱 425px screens
              425: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },

              // 📱 Tablets small
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },

              // 💻 Medium/Large screens
              768: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className={isMobile ? mobileViewClassName : desktopViewClassname}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </ScreenViewContainer>
    </Wrapper>
  );
};
