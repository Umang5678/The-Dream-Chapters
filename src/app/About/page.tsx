import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Us Section */}
      <section
        id="about-section"
        className="py-20 px-4 bg-gray-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/67.jpg')" }}
      >
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Our Story */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-5xl font-playfair mb-6 text-black relative after:block after:w-20 after:h-1 after:bg-[#92657e] after:mt-2"
                    style={{ fontFamily: "Playfair Display", fontSize: "25px" }}>
                Our Story
              </h2>
              <p className="text-gray-600 mb-5 text-lg md:text-xl text-justify">
                Founded with a passion for creating unforgettable experiences, we
                started by organizing small community events. Our dedication to
                excellence and attention to detail quickly established us as a trusted
                name in the industry, allowing us to expand our reach and elevate our
                services.
              </p>
              <p className="text-gray-600 mb-5 text-lg md:text-xl text-justify">
                As we continue to grow, we embrace new trends and technologies,
                ensuring our events are not only memorable but also reflect the latest
                in event design and execution. Our commitment to excellence drives us
                to exceed expectations at every turn.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/24.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-lg object-cover w-full max-w-md md:max-w-lg"
              />
            </div>
          </section>

          {/* Our Mission */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image first on mobile */}
            <img
              src="/images/12.jpg"
              alt="Our Mission"
              className="rounded-lg w-full h-64 md:h-96 object-cover order-1 md:order-none"
            />

            <div>
              <h2 className="text-3xl md:text-5xl  mb-6 text-black relative after:block after:w-full after:h-1 after:bg-[#92657e] after:mt-2"
                    style={{ fontFamily: "Playfair Display", fontSize: "27px" }}>
                Transforming events into experiences
              </h2>
              <p className="text-gray-600 mb-5 text-lg md:text-xl text-justify"
                    style={{ fontFamily: "Playfair Display", }}>
                With stunning setups and seamless execution, we create
                atmospheres that engage and inspire, ensuring every moment
                is memorable for all attendees.
              </p>
              <p className="text-gray-600 mb-5 text-lg md:text-xl text-justify">
                Our events are designed to resonate, combining captivating
                themes with personalized touches. Each detail is crafted to
                create a unique experience that leaves a lasting impression.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
