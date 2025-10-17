"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import contact from "@/app/contact/page";
import { Instagram } from "lucide-react";
import WhatWeDo from "@/components/WhatWeDo";
import EventsAndOffers from "@/components/EventsAndOffers";
import Footer from "@/components/Footer/Footer";
import About from "@/app/About/page"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* <Hero
        title="Relax & Celebrate:The Ultimate Event Experience"
        backgroundImage="/images/hero.jpg"
      /> */}
      <Hero
        title="Relax & Celebrate: The Ultimate Event Experience"
        backgroundImages={[
          "/images/12.jpg",
          "/images/11.jpg",
          "/images/14.jpg",
        ]}
      />

      <WhatWeDo />

     

    <section
  className="py-20 px-4"
  style={{ backgroundColor: "rgb(215, 217, 206)" }}
>
  <div className="container mx-auto">
    <h1
      className="text-center mb-4 text-black font-bold"
      style={{ fontFamily: "Playfair Display", fontSize: "37px" }}
    >
      Types Of Event
    </h1>

    <p className="text-base mb-12 text-center text-gray-700 max-w-2xl mx-auto">
      From intimate gatherings to grand celebrations, we bring your dream event
      to life with creativity, precision, and passion.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Social Events",
          desc: "Wedding, Birthday, Baby Shower, Anniversary, House Warming, Reunion Party, Festival Celebration and much more...",
          img: "/images/31.jpg",
        },
        {
          title: "Corporate Events",
          desc: "Conference, Product Launch, Exhibition, Dealer Meet, Motivational Activity, Award Function, and much more...",
          img: "/images/30.jpg",
        },
        {
          title: "Weddings",
          desc: "Destination Wedding, Ring Ceremony, Reception, Haldi, Bachelor Party, Sangeet Sandhya, Mayra, and much more...",
          img: "/images/32.jpg",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
          {/* Image */}
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-96 object-cover transform md:group-hover:scale-110 transition duration-700 ease-in-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 md:group-hover:from-black/90"></div>

          {/* Text content */}
          <div className="absolute inset-x-0 bottom-0 text-center text-white p-6 pb-10 transition-all duration-700">
            {/* Title */}
            <h3
              className="text-2xl font-bold transition-all duration-700 transform md:group-hover:-translate-y-12 md:group-hover:text-purple-300"
              style={{ fontFamily: "Playfair Display", fontSize: "34px" }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm mt-3 leading-relaxed max-w-xs mx-auto transition-all duration-700 
              opacity-100 translate-y-2 
              md:opacity-0 md:translate-y-0 
              md:group-hover:opacity-100 md:group-hover:translate-y-2"
            >
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Photo Gallery Section */}

    <section
      id="gallery"
      className="relative py-20 px-4 sm:px-6 bg-center bg-cover sm:bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/images/67.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        {/* <h2 className="text-center text-white font-playfair font-bold text-5xl mb-12 relative after:content-[''] after:block after:w-24 after:h-[3px] after:bg-[#d4a5b2] after:mx-auto after:mt-4">
          Photo Gallery
        </h2> */}

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large Image */}
          <div className="row-span-2">
            <Image
              src="/images/18.jpg"
              alt="Gallery 1"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/co.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/16.jpg"
              alt="Gallery 2"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/1.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/31.jpg"
              alt="Gallery 3"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/2.jpg"
            />
          </div>

          <div className="col-span-2">
            <Image
              src="/images/17.jpg"
              alt="Gallery 4"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/3.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/23.jpg"
              alt="Gallery 5"
              width={600}
              height={500}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/1.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/19.jpg"
              alt="Gallery 6"
              width={600}
              height={500}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/2.jpg"
            />
          </div>

          <div className="row-span-2">
            <Image
              src="/images/24.jpg"
              alt="Gallery 7"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/1.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/20.jpg"
              alt="Gallery 8"
              width={600}
              height={400}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/3.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/26.jpg"
              alt="Gallery 9"
              width={600}
              height={400}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/hero.jpg"
            />
          </div>

          <div className="col-span-2">
            <Image
              src="/images/32.jpg"
              alt="Gallery 10"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/hero.jpg"
            />
          </div>

          <div>
            <Image
              src="/images/21.jpg"
              alt="Gallery 11"
              width={600}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/2.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  


      <About/>

    

     
  
    </div>
  );
}
