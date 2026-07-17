"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Heart,
  BedDouble,
  Users,
} from "lucide-react";
import type { Property } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";
import PropertyModel from "./PropertyModel";

export default function PropertyCard({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {

  const [open, setOpen] = useState(false);
  return (
  <>
    <motion.article
  onClick={() => setOpen(true)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
className="group cursor-pointer overflow-hidden rounded-[30px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"    >
      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(min-width:1024px)380px,100vw"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Property Type */}

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${
            property.type === "Resort"
              ? "bg-[#0f4c81] text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {property.type}
        </span>

        {/* Favourite */}

<button
  onClick={(e) => e.stopPropagation()}
  className="absolute right-5 top-5 rounded-full bg-white/90 p-2 shadow transition hover:bg-red-500 hover:text-white"
>
          <Heart size={18} />

        </button>

        {/* Price */}

<div
  onClick={(e) => e.stopPropagation()}
  className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-2 backdrop-blur"
>
          <p className="text-xs uppercase tracking-widest text-[#64748b]">
            Starting From
          </p>

          <h4 className="font-bold text-[#0f4c81]">
            {property.price}
          </h4>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        {/* Location */}

        <div className="flex items-center gap-2 text-sm text-[#64748b]">

          <MapPin size={16} />

          {property.location}

        </div>

        {/* Title */}

        <h3 className="font-display text-2xl font-bold text-[#0d1b2a]">

          {property.name}

        </h3>

        {/* Rating */}

       <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">

  <div>
    <p className="text-xs uppercase tracking-widest text-[#94a3b8]">
      Starting From
    </p>

    <h4 className="text-2xl font-bold text-[#06b6d4]">
      {property.price}
    </h4>
  </div>

  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpen(true);
    }}
    className="rounded-full bg-[#0f4c81] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0891b2]"
  >
    View Details
  </button>

</div>

        {/* Description */}

        {/* <p className="leading-7 text-slate-600">

          {property.description}

        </p> */}
                {/* Amenities */}

        {/* <div className="grid grid-cols-3 gap-4 rounded-2xl bg-slate-50 p-4">

          <div className="flex flex-col items-center gap-2">

            <BedDouble
              size={20}
              className="text-cyan-600"
            />

            <span className="text-xs text-slate-600">
              2 Bedrooms
            </span>

          </div>

          <div className="flex flex-col items-center gap-2">

            <Users
              size={20}
              className="text-cyan-600"
            />

            <span className="text-xs text-slate-600">
              4 Guests
            </span>

          </div>

          <div className="flex flex-col items-center gap-2">

            <MapPin
              size={20}
              className="text-cyan-600"
            />

            <span className="text-xs text-slate-600">
              Prime Location
            </span>

          </div>

        </div> */}

        {/* Features */}

        {/* <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
            Free WiFi
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Parking
          </span>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            Mountain View
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            Breakfast
          </span>

        </div> */}

        {/* Bottom */}

        <div className="flex items-center justify-between border-t pt-6">

          {/* <div>

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Starting From
            </p>

            <h4 className="text-2xl font-bold text-cyan-700">
              {property.price}
            </h4>

          </div> */}

{/* <div onClick={(e) => e.stopPropagation()}>
  <WhatsAppButton            message={`Hello Waves & Mist,

I'm interested in booking:

🏡 ${property.name}

📍 ${property.location}

Please share:

- Availability
- Photos
- Amenities
- Best Price
- Booking Process

Thank you.`}
            className="!bg-cyan-600 hover:!bg-cyan-700 !text-white !px-6 !py-3"
          >
            Book Now
  </WhatsAppButton>
</div> */}
        </div>

      </div>

    </motion.article>

    <PropertyModel
      open={open}
      onClose={() => setOpen(false)}
      property={property}
    />
  </>
);
}