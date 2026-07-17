"use client";

import { motion } from "framer-motion";
import { PROPERTIES } from "@/lib/site-config";
import PropertyCard from "./PropertyCard";

export default function Showcase() {
  return (
    <section id="stays" className="relative bg-fog-deep/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs tracked uppercase text-sage-deep mb-4">Resorts &amp; homestays</p>
          <h2 className="font-display text-3xl md:text-4xl tracked-tight text-wave-deep">
            The collection
          </h2>
          <p className="mt-4 text-slate-soft leading-relaxed">
            Six places to stay, no two alike — from canopy-level resort villas to a single
            spare room in a fishing family&apos;s home. Every listing books directly on WhatsApp.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={property.slug} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
