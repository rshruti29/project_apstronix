"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperRef } from "swiper/react";

import {
  ScreenViewContainer,
  SliderContainer,
  Wrapper,
} from "./Carousel.styles";
import { LeftArrowButton, RightArrowButton } from "./ArrowButton";

import "./swiper.css";

interface SwiperCarouselProps {
  mapFunction: (() => React.ReactNode[]) | React.ReactNode[];
  mobileViewClassName?: string;
  desktopViewClassname?: string;
  onIndexChange?: (index: number) => void;
  isEventSection?: boolean;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  mapFunction,
  mobileViewClassName,
  desktopViewClassname,
  onIndexChange,
}) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperRef | null>(null);

  const slideWidth = 456.74;

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 900);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();

  const onSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
    if (onIndexChange) onIndexChange(swiper.realIndex);
  };

  useEffect(() => {
    if (!scope.current) return;
    const xOffset = -currentIndex * slideWidth;

    animate(
      scope.current,
      { x: xOffset },
      { duration: 7, ease: [0.42, 0, 0.58, 1], type: "tween" }
    );
  }, [currentIndex, animate, scope]);

  const slides =
    typeof mapFunction === "function"
      ? mapFunction()
      : (mapFunction as React.ReactNode[]);

  return (
    <Wrapper>
      <ScreenViewContainer>
        {/* Left Arrow */}
        <div
          style={{ position: "absolute", left: "10px", top: "50%", zIndex: 10 }}
        >
          <LeftArrowButton onClick={handlePrev} />
        </div>

        <SliderContainer ref={scope}>
          <Swiper
            ref={swiperRef}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides
            loop
            spaceBetween={isMobile ? 30 : 0}
            onSlideChange={onSlideChange}
            modules={[Pagination]}
            className={isMobile ? mobileViewClassName : desktopViewClassname}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>

        {/* Right Arrow */}
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            zIndex: 10,
          }}
        >
          <RightArrowButton onClick={handleNext} />
        </div>
      </ScreenViewContainer>
    </Wrapper>
  );
};
