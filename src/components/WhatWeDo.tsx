"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../Assets/bgImage3.jpg";
import whatWeDo from "../Assets/whatWeDo.webp";

export default function WhatWeDo() {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left text-black"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            What We Do?
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            <strong className="text-[#574656]
 text-3xl">
              The Dream Chapters
            </strong>{" "}
            is your all-in-one destination for exceptional event management
            services. We bring your vision to life with creativity, precision,
            and professionalism. From corporate events and exhibitions to social
            celebrations like birthdays and weddings, our offerings include
            event planning, production, and custom stall design. With innovative
            concepts and seamless execution, we ensure your event is not only
            memorable—but effortlessly managed.
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <div className="w-full max-w-[500px]">
            <Image
              src={whatWeDo}
              alt="What we do"
              className="rounded-xl shadow-2xl object-cover w-full h-auto"
              width={600}
              height={420}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
