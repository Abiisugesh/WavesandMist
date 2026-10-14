"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROPERTIES } from "@/lib/site-config";

export default function StaysPage() {
  return (
    <main className="relative min-h-screen bg-fog-deep/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs tracked uppercase text-sage-deep mb-4">
            Resorts &amp; homestays
          </p>

          <h1 className="font-display text-3xl md:text-4xl tracked-tight text-wave-deep">
            The collection
          </h1>

          <p className="mt-4 text-slate-soft leading-relaxed">
            Explore our collection of resorts and family-run homestays,
            surrounded by mountains, forests and the coastline.
          </p>
        </motion.div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {PROPERTIES.map((property, index) => (
            <motion.article
              key={property.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl bg-white/80
                         shadow-sm transition-all duration-500
                         hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={property.image}
                  alt={property.name}
                  className="h-full w-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />

                {/* Property Type */}
                <div className="absolute top-5 left-5">
                  <span
                    className="rounded-full bg-fog-deep/90
                               px-4 py-2 text-xs tracked
                               uppercase text-wave-deep
                               backdrop-blur-sm"
                  >
                    {property.type}
                  </span>
                </div>

              </div>

              {/* Card Content */}
              <div className="p-6 md:p-7">

                <h2 className="font-display text-2xl text-wave-deep">
                  {property.name}
                </h2>

                <p className="mt-2 text-sm text-slate-soft">
                  {property.location}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-soft line-clamp-2">
                  {property.description}
                </p>

                {/* View Details */}
                <div className="mt-6">
                  <Link
                    href={`/stays/${property.slug}`}
                    className="inline-flex items-center
                               rounded-full border border-wave-deep
                               px-6 py-2.5 text-xs tracked uppercase
                               text-wave-deep
                               transition-all duration-300
                               hover:bg-wave-deep hover:text-white"
                  >
                    View Details
                  </Link>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </main>
  );
}