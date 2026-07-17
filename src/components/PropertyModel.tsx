"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Star,
  Users,
  BedDouble,
  Wifi,
  Car,
  Coffee,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import type { Property } from "@/lib/site-config";

type Props = {
  open: boolean;
  onClose: () => void;
  property: Property | null;
};

export default function PropertyModel({
  open,
  onClose,
  property,
}: Props) {
  if (!property) return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"

          onClick={onClose}
        >

          <motion.div

            initial={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}

            transition={{
              duration: .35,
            }}

            onClick={(e) => e.stopPropagation()}

            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[35px] bg-white shadow-2xl"

          >

            {/* Close */}

            <button

              onClick={onClose}

              className="absolute right-6 top-6 z-20 rounded-full bg-white p-3 shadow-lg hover:bg-red-500 hover:text-white"

            >

              <X size={22} />

            </button>

            {/* Hero Image */}

            <div className="relative h-[420px] w-full">

              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10">

                <span className="rounded-full bg-cyan-500 px-4 py-2 text-xs uppercase tracking-widest text-white">

                  {property.type}

                </span>

                <h2 className="mt-5 text-5xl font-bold text-white">

                  {property.name}

                </h2>

                <div className="mt-4 flex items-center gap-5 text-white">

                  <div className="flex items-center gap-2">

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    4.9

                  </div>

                  <div className="flex items-center gap-2">

                    <MapPin size={18} />

                    {property.location}

                  </div>

                </div>

              </div>

            </div>

            {/* Content */}

            <div className="grid gap-10 p-10 lg:grid-cols-3">

              {/* Left */}

<div className="space-y-8 lg:col-span-2">                              {/* About Property */}

                <div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    About this Property
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {property.description}
                  </p>

                </div>

                {/* Property Details */}

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Property Details
                  </h3>

                  <div className="mt-6 grid gap-5 sm:grid-cols-3">

                    <div className="rounded-2xl bg-slate-100 p-5 text-center">
                      <BedDouble className="mx-auto mb-3 text-cyan-900" />
                      <h4 className="font-semibold text-black">2 Bedrooms</h4>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-5 text-center">
                      <Users className="mx-auto mb-3 text-cyan-600" />
                      <h4 className="font-semibold text-black">4 Guests</h4>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-5 text-center">
                      <MapPin className="mx-auto mb-3 text-cyan-600" />
                      <h4 className="font-semibold text-black">
                        {property.location}
                      </h4>
                    </div>

                  </div>

                </div>

                {/* Amenities */}

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Amenities
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                    <div className="rounded-xl bg-slate-100 p-5 text-center">
                      <Wifi className="mx-auto mb-3 text-cyan-600" />
                     <h4 className="font-semibold text-black">Free WiFi</h4> 
                    </div>

                    <div className="rounded-xl bg-slate-100 p-5 text-center">
                      <Car className="mx-auto mb-3 text-cyan-600" />
                     <h4 className="font-semibold text-black">Parking</h4> 
                    </div>

                    <div className="rounded-xl bg-slate-100 p-5 text-center">
                      <Coffee className="mx-auto mb-3 text-cyan-600" />
                     <h4 className="font-semibold text-black">Breakfast</h4> 
                    </div>

                    <div className="rounded-xl bg-slate-100 p-5 text-center">
                      <Star className="mx-auto mb-3 text-cyan-600" />
                     <h4 className="font-semibold text-black">Mountain View</h4> 
                    </div>

                  </div>

                </div>

              </div>

              {/* Right Sidebar */}

              <div>

                <div className="sticky top-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                  <h3 className="text-3xl font-bold text-cyan-700">
                    {property.price}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Starting price per night
                  </p>

                  <div className="mt-8 space-y-4">

                    <WhatsAppButton
                      message={`Hello Waves & Mist,

I'm interested in booking:

🏡 ${property.name}

📍 ${property.location}

Please share:

• Availability
• Photos
• Amenities
• Best Price
• Booking Process

Thank you.`}
                      className="w-full justify-center !bg-cyan-600 hover:!bg-cyan-700 !text-white"
                    >
                      Book Now
                    </WhatsAppButton>

                    <WhatsAppButton
                      message={`Hello Waves & Mist,

I need more information about:

${property.name}`}
                      className="w-full justify-center !bg-green-600 hover:!bg-green-700 !text-white"
                    >
                      Enquire Now
                    </WhatsAppButton>

                  </div>

                  <div className="mt-8 rounded-2xl bg-white p-5">

                    <h4 className="font-bold text-black">
                      Why Choose Waves & Mist?
                    </h4>

                    <ul className="mt-4 space-y-3 text-sm text-slate-600">

                      <li>✔ Verified Properties</li>

                      <li>✔ Best Price Guarantee</li>

                      <li>✔ Instant WhatsApp Support</li>

                      <li>✔ Safe & Secure Booking</li>

                      <li>✔ Local Travel Assistance</li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}