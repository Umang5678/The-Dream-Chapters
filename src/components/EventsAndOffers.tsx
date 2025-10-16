"use client";

import { motion } from "framer-motion";

interface EventCard {
  title: string;
  description: string;
  image: string;
}

const eventCards: EventCard[] = [
  {
    title: "Social Event",
    description:
      "Wedding, Birthday, Baby Shower, Anniversary, House Warming, Reunion Party, Festival Celebration and much more...",
    image: "/images/1.jpg",
  },
  {
    title: "Corporate Event",
    description:
      "Conference, Product Launch, Exhibition, Dealer Meet, Motivational Activity, Award Function, and much more...",
    image: "/images/2.jpg",
  },
  {
    title: "Wedding",
    description:
      "Destination Wedding, Ring Ceremony, Reception, Haldi, Bachelor Party, Sangeet Sandhya, Mayra, and much more...",
    image: "/images/3.jpg",
  },
];

const offers: EventCard[] = [
  {
    title: "Tailored Solutions",
    description:
      "We provide personalized solutions to meet your unique needs. Our team works with you to ensure optimal results from start to finish.",
    image: "/images/4.jpg",
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "Customer satisfaction is our priority. Our support team is always ready to assist, ensuring you have a smooth and successful experience.",
    image: "/images/4.jpg",
  },
  {
    title: "Quality and Excellence",
    description:
      "With extensive experience and deep industry knowledge, we provide insights and solutions that keep you ahead of the curve.",
    image: "/images/5.jpg",
  },
  {
    title: "Expertise and Knowledge",
    description:
      "We offer cutting-edge products and services to tackle modern challenges. Leveraging the latest technology, we help you achieve your goals.",
    image: "/images/6.jpg",
  },
];

export default function AnimatedSections() {
  return (
    <div className="space-y-20">
      {/* Type of Events */}
      {/* Type of Events */}
      <section
  className="py-24 px-6"
  style={{ backgroundColor: "#F7F3EE" }}
>
  <h2 className="text-3xl md:text-4xl font-light mb-16 text-gray-900 tracking-tight text-center">
    Type of Events
  </h2>

  <div className="grid gap-12 md:grid-cols-3">
    {eventCards.map((card, index) => (
      <motion.div
        key={index}
        className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Background Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 group-hover:from-black/90" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white pointer-events-none">
          {/* Title - starts at bottom, moves to center on hover */}
          <h3 className="text-xl font-semibold tracking-wide transition-all duration-500 transform translate-y-24 group-hover:translate-y-0 text-center">
            {card.title}
          </h3>

          {/* Description - fades in below title on hover */}
          <p className="opacity-0 text-sm leading-relaxed transition-all duration-500 transform group-hover:opacity-100 text-center max-w-xs mt-3">
            {card.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Offers Section */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          What We Offer To Our Customers
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((card, index) => (
            <motion.div
              key={index}
              className="bg-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="pt-4 px-6 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">
                  {card.title}
                </h3>
                <p className="text-gray-800 mb-2">{card.description}</p>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-md mt-2"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
