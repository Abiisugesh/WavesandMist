"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PROPERTIES } from "@/lib/site-config";
import PropertyCard from "./PropertyCard";

export default function Showcase() {
  const [showProperties, setShowProperties] = useState(false);

  return (
    <section
      id="stays"
      className="relative bg-fog-deep/40 py-24 md:py-32"
    >
      <div className="mx-auto w-full px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs tracked uppercase text-sage-deep mb-4">
            Resorts &amp; homestays
          </p>

          <h2 className="font-display text-3xl md:text-4xl tracked-tight text-wave-deep">
            The collection
          </h2>

          <p className="mt-4 text-slate-soft leading-relaxed">
            Six places to stay, no two alike — from canopy-level resort
            villas to a single spare room in a fishing family&apos;s home.
            Every listing books directly on WhatsApp.
          </p>
        </motion.div>

        {/* TWO LARGE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Card 1 */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-96 overflow-hidden">
              <img
                src="/images/img3.png"
                alt="Canopy Villa"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl text-black">
                  Mahendragiri
              </h3>

              <p className="mt-2 text-base text-gray-500">
                Tirunelveli, Tamil Nadu
              </p>
               <div className="mt-6 flex items-center justify-between">
      <div>
        <p className="text-sm sm:text-lg text-black bg-orange-200 px-3 py-2 rounded-full whitespace-nowrap">
  <span className="font-bold">👤 Per Person:</span>{" "}
  <span>₹1000</span>
</p>

       
      </div>

     <a
  href="/mahendragiri?place=mahendragiri"
  className="
    rounded-full
    border-2 border-wave-deep
    px-6 py-2.5
    text-xs sm:text-sm
    font-medium
    text-wave-deep
    transition-all duration-300
    hover:bg-wave-deep
    hover:text-white
    hover:shadow-lg
    hover:scale-105
    text-white
    bg-gradient-to-r from-cyan-500 to-emerald-500
    py-3
    font-semibold
  "
>
  Explore Package  →
</a>
    </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
  <div className="relative h-96 overflow-hidden">
    <img
      src="/images/eco2.png"
      alt="Mahendragiri"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <div className="p-6">
    <h3 className="font-display text-2xl text-black">
      Farm Stay
    </h3>

    <p className="mt-2 text-base text-gray-500">
      Santhapuram, Nagercoil
    </p>

    {/* Price + Explore */}
    <div className="mt-6 flex items-center justify-between">
      <div>
         <p className="text-sm sm:text-lg text-black bg-orange-200 px-3 py-2 rounded-full whitespace-nowrap">
  <span className="font-bold">👤 Per Person:</span>{" "}
  <span>₹1000</span>
</p>

       
      </div>

     <a 
  href="/mahendragiri?place=eco-resort"
 className="
    rounded-full
    border-2 border-wave-deep
    px-6 py-2.5
    text-xs sm:text-sm
    font-medium
    text-wave-deep
    transition-all duration-300
    hover:bg-wave-deep
    hover:text-white
    hover:shadow-lg
    hover:scale-105
    text-white
    bg-gradient-to-r from-cyan-500 to-emerald-500
    py-3
    font-semibold
  "
>
  Explore Package →
</a>
    </div>
  </div>
</div>

        </div>

        {/* EXPLORE BUTTON */}
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setShowProperties(!showProperties)}
            className="rounded-full
      border-2 border-wave-deep
      px-8 py-3
      text-sm font-medium
      text-wave-deep
      bg-transparent
      transition-all duration-300
      hover:bg-wave-deep
      hover:text-white
      hover:shadow-lg
      hover:scale-105"
          >
            {showProperties ? "Hide Properties" : "Explore"}
          </button>
        </div>

        {/* EXISTING PROPERTY CARDS */}
        {showProperties && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {PROPERTIES.map((property, index) => (
              <PropertyCard
                key={property.slug}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}