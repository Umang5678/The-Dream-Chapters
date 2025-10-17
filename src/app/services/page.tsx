"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const topServices = [
    {
      title: "Venue Selection",
      desc: "Will be helping in searching the venue suitable to our needs and budget friendly.",
      img: "/images/32.jpg",
    },
    {
      title: "Planning",
      desc: "It includes all the decision making part be it the selection of decor designs, vendors, artists, agencies and every other things which are going to be involved throughout our event.",
      img: "/images/36.jpg",
    },
    {
      title: "Vendor Sourcing",
      desc: "Providing each vendor and agency needed with suitable options.",
      img: "/images/38.jpg",
    },
    {
      title: "Hospitality",
      desc: "-RSVP - Rooms allocation - Check-ins - Tagging the luggage of guests - Assuring that luggage is placed in every guests room correctly - Placing hampers and itinerary in each guests room - Managing return gifts - Making call before every functions - To sort any room related queries of guests",
      img: "/images/21.jpg",
    },
    {
      title: "Logistics",
      desc: "- Manage arrivals and departure lists of guests - Pickups of guests from railway station & airports - Internal logistics in the city will be managed - Dropping off guests after their checkouts",
      img: "/images/28.jpg",
    },
    {
      title: "Food & Beverages",
      desc: "- Help you in selecting the best suitable caterers On day of execution: - Plate counts - Proper refilling of food - Manage rolling live counters - Taking count of extra plates if needed - managing sajjangoth",
      img: "/images/30.jpg",
    },
    {
      title: "Artist Management",
      desc: "Managing artists’ every need during the event.",
      img: '/images/35.jpg'
    },
    {
      title: "Client Servicing",
      desc: "Shadows will be provided to manage things you ask them for.",
      img: "/images/37.jpg",
    },
{
      title: "Production",
      desc: "Coordination with all vendors and execution.",
      img: '/images/11.jpg'
    },
  ];

  return (
    <div className="text-white">
      {/* === Overlapping Animated Service Cards (one per line) === */}
      <section className="relative bg-white
       py-24 px-6 overflow-hidden">
     

<div className="relative max-w-3xl mx-auto flex flex-col items-center">
  {topServices.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 60 }}
      viewport={{ amount: 0.5 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    className={`relative rounded-2xl overflow-hidden shadow-lg bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-500 w-full ${
    index === 0 ? "mt-0" : "-mt-40"
  }`}
  style={{ zIndex: 10 + index }}
    >
      {/* Card Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover"
              quality={60} // reduces image size
    priority={index === 0} // preload first 3 images
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
        {/* Top-left content */}
        <div className="flex flex-col items-start">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl font-bold mb-2"

          >
            {service.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-base text-gray-200"
          >
            {service.desc}
          </motion.p>
        </div>

        {/* Bottom-left button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="self-start bg-[#574656] hover:bg-[#574656] px-6 py-2 text-sm font-semibold rounded transition-all duration-300"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>


      </section>

      {/* === Existing Wedding Services Section === */}
<div className="relative min-h-screen flex items-center justify-center px-4 py-10 sm:py-20 text-center overflow-hidden">
  {/* Background image */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/images/1566.jpg')" }}
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

  {/* Content */}
  <div className="relative z-20 backdrop-blur-md bg-white/30 text-white border border-white/20 p-6 sm:p-10 rounded-xl shadow-2xl max-w-5xl w-full">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 drop-shadow-lg">
      Our Wedding Services
    </h2>
    <p className="mb-8 text-sm sm:text-base text-white/90">
      Explore our exclusive wedding services designed to create unforgettable
      moments. From planning to execution, we ensure every detail is perfect
      for your special day.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left text-sm text-white/90">
      {[
        "Event Concept",
        'Venue Selection',
        "Vendor Sourcing",
        'Hospitality',
        "Logistics Management",
        "Theme Decor",
        'Food and Beverages',
        "Technical Equipments",
        "Artists",
        "Photography",
        'Fireworks and SFX',
        'Choreography',
        // "Social Activations",
        // "Entry Concept",
        // "Catering Services",
        // "Balloon Decoration",
        // "3D Event Setup",
        // "Man Power",
        // "Special Effects",
        // "Budget Management",
        // "Light Setup",
        // "Stage Layout",
        // "Invitation Cards",
      ].map((service, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-blue-200">✦</span>
          <a
            href="#"
            className="hover:underline hover:text-blue-100 transition-colors duration-200"
          >
            {service}
          </a>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* === Upcoming Events Section === */}
      <section className="bg-[#92657e] py-12 px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Upcoming Events</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Event Management Services",
              date: "5th December",
              desc: "Discover our services live.",
              img: "/images/11.jpg",
            },
            {
              title: "Corporate Gala Night",
              date: "10th November",
              desc: "Connect with our talented team.",
              img: "/images/30.jpg",
            },
            {
              title: "Wedding Planning Services",
              date: "15th October",
              desc: "Annual Event Showcase.",
              img: "/images/12.jpg",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white text-black rounded shadow overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{event.title}</h4>
                <p className="text-xs text-gray-600">{event.date}</p>
                <p className="text-sm mt-2">{event.desc}</p>
                <button className="mt-4 bg-[#574656] text-white px-4 py-2 text-sm rounded hover:bg-purple-700 transition-colors duration-200">
                  Reserve your spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
