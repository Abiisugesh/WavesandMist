"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PROPERTIES } from "@/lib/site-config";
import PropertyCard from "./PropertyCard";

export default function Showcase() {
  const [showProperties, setShowProperties] = useState(false);

  return (
    <section id="stays" className="relative bg-fog-deep/40 py-24 md:py-32">
      <div className="mx-auto w-full px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="tracked mb-4 text-base uppercase text-sage-deep md:text-lg">
            Resorts &amp; homestays
          </p>

          <h2 className="font-display tracked-tight text-4xl text-wave-deep md:text-6xl">
            The collection
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-soft md:text-xl">
            Discover unique places to stay, from peaceful resort villas to
            comfortable homestays. Every listing books directly on WhatsApp.
          </p>
        </motion.div>

        {/* THREE LARGE CARDS */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Nova Nest */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-80 overflow-hidden md:h-96">
              <img
                src="/images/nova 15.png"
                alt="Nova Nest"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-slate-100">
                <span className="text-lg font-semibold text-slate-500">
                  Nova Nest
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-black">
                Nova Nest
              </h3>

              <p className="mt-2 text-base text-gray-500">
                Nagercoil, Tamil Nadu
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="whitespace-nowrap rounded-full bg-orange-200 px-3 py-2 text-sm text-black sm:text-base">
                  <span className="font-bold">👤 Per Person:</span>{" "}
                  <span>₹1,200 / night</span>
                </p>

                <a
                  href="/mahendragiri?place=nova-nest"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Explore Package →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Farm Stay */}

          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-80 overflow-hidden md:h-96">
              <img
                src="/images/eco2.png"
                alt="Farm Stay"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-black">
                Farm Stay
              </h3>

              <p className="mt-2 text-base text-gray-500">
                Santhapuram, Nagercoil
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="whitespace-nowrap rounded-full bg-orange-200 px-3 py-2 text-sm text-black sm:text-base">
                  <span className="font-bold">👤 Per Person:</span>{" "}
                  <span>₹1,000</span>
                </p>

                <a
                  href="/mahendragiri?place=eco-resort"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Explore Package →
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 Mahendragiri */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-80 overflow-hidden md:h-96">
              <img
                src="/images/mahaa.png"
                alt="Mahendragiri"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-black">
                Mahendragiri
              </h3>

              <p className="mt-2 text-base text-gray-500">
                Kanyakumari , Tamil Nadu
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="whitespace-nowrap rounded-full bg-orange-200 px-3 py-2 text-sm text-black sm:text-base">
                  <span className="font-bold">👤 Per Person:</span>{" "}
                  <span>₹1,000</span>
                </p>

                <a
                  href="/mahendragiri?place=mahendragiri"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Explore Package →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE BUTTON */}
        <div className="mb-12 flex justify-end">
          <button
            onClick={() => setShowProperties(!showProperties)}
            className="rounded-full border-2 border-wave-deep bg-transparent px-8 py-3 text-sm font-medium text-wave-deep transition-all duration-300 hover:scale-105 hover:bg-wave-deep hover:text-white hover:shadow-lg"
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
            className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
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
