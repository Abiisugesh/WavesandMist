"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
            ABOUT WAVES & MIST
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Explore the Beauty of
            <br />

            <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Kanyakumari
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Waves & Mist is your trusted tourism partner for discovering the
            hidden beauty of Kanyakumari and South India.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We connect travelers with beautiful mountain stays, beach villas,
            waterfalls, estate resorts, farm stays, luxury villas and
            unforgettable local experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you're planning a honeymoon, family vacation, weekend
            getaway, adventure trip or corporate outing, we help you find the
            perfect destination and stay.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#stays"
              className="rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-700"
            >
              Explore Stays
            </a>

            <a
              href="#book"
              className="rounded-full border-2 border-cyan-600 px-8 py-4 font-semibold text-cyan-700 transition duration-300 hover:bg-cyan-600 hover:text-white"
            >
              Contact Us
            </a>
          </div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-3 gap-6 border-t pt-10">
            <div>
              <h3 className="text-4xl font-bold text-cyan-600">150+</h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                Tourist Places
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-600">300+</h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                Partner Properties
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-600">2K+</h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                Happy Travelers
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[35px] shadow-2xl">
            <Image
              src="/images/About image.png"
              alt="Waves and Mist"
              width={700}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl">
            <h4 className="text-4xl font-bold text-cyan-600">★★★★★</h4>

            <p className="mt-3 text-sm text-slate-600">
              Trusted by thousands of travelers across South India.
            </p>
          </div>

          <div className="absolute -top-6 -right-6 rounded-full bg-cyan-600 px-8 py-6 text-center text-white shadow-xl">
            <h3 className="text-3xl font-bold">100%</h3>

            <p className="text-xs uppercase tracking-widest">
              Trusted Service
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}