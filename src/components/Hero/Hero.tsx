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
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // hide arrows
  };

  return (
    <div className="relative min-h-screen">
      <Slider {...settings}>
        {backgroundImages.map((img, i) => (
          <div key={i}>
            <div
              className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1
                  className="text-4xl md:text-6xl font-playfair text-white mb-6"
                  style={{ fontFamily: "playfair" }}
                >
                  {title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
