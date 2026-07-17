"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
            ABOUT WAVES & MIST
          </span>

          <h2 className="mt-7 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
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
            getaway, adventure trip or corporate outing, we help you discover
            the perfect destination and stay.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#stays"
              className="rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-cyan-700"
            >
              Explore Stays
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-cyan-600 px-8 py-4 font-semibold text-cyan-700 transition hover:bg-cyan-600 hover:text-white"
            >
              Contact Us
            </a>
          </div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-slate-200 pt-10">

            <div>
              <h3 className="text-4xl font-bold text-cyan-600">150+</h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                Tourist Places
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-600">300+</h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                Partner Properties
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-600 ">2K+</h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                Happy Travelers
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >

          {/* IMAGE */}

          <div className="overflow-hidden rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/About image.png"
              alt="Waves and Mist"
              width={700}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* TRUST BADGE */}

          <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 rounded-full bg-cyan-600 px-10 py-8 text-center text-white shadow-2xl">

            <h3 className="text-4xl font-bold">
              100%
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.3em]">
              Trusted Service
            </p>

          </div>

          {/* REVIEW CARD */}

          <div className="absolute bottom-8 left-8 max-w-sm rounded-3xl bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">

            <div className="text-4xl text-yellow-400">
              ★★★★★
            </div>

            <h4 className="mt-3 text-xl font-bold text-slate-900">
              Excellent Experience
            </h4>

            <p className="mt-3 leading-7 text-slate-600">
              Trusted by thousands of travelers across South India for premium
              stays, luxury resorts, hill stations, beach villas and memorable
              holiday experiences.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}