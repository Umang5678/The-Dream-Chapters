"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface HeroProps {
  title: string;
  backgroundImages: string[];
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImages, subtitle }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, // smooth crossfade between images
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slider background only */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {backgroundImages.map((img, i) => (
            <div key={i}>
              <div
                className="min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Static title (not sliding) */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-playfair text-white mb-4"
          style={{ fontFamily: "Playfair Display" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
