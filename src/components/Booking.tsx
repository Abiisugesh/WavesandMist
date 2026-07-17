"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Hotel,
  Home,
  Mountain,
  Trees,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/site-config";

export default function Booking() {
  const displayNumber = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(
    2,
    7
  )} ${WHATSAPP_NUMBER.slice(7)}`;

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="p-10 lg:p-16">

              <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                FOR TRAVELERS & PROPERTY OWNERS
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
                Travel More.
                <br />
                Host Smarter.
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Whether you're planning your dream vacation or you own a resort,
                villa, homestay, farm stay, estate stay or beach property,
                Waves & Mist helps connect travelers with unforgettable stays
                across South India.
              </p>

              <div className="mt-12 grid gap-6">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <Phone className="text-cyan-400" size={28} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Call / WhatsApp
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                      {displayNumber}
                    </h3>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <MapPin className="text-cyan-400" size={28} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Serving
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                      Tamil Nadu • Kerala
                    </h3>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <Clock className="text-cyan-400" size={28} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Customer Support
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                      Available 24 × 7
                    </h3>

                  </div>

                </div>

              </div>

              <div className="mt-14">

                <h3 className="mb-6 text-2xl font-bold text-white">
                  We Promote
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-white/10 p-5 text-white">
                    <Hotel className="mb-3 text-cyan-400" />
                    Resorts
                  </div>

                  <div className="rounded-xl bg-white/10 p-5 text-white">
                    <Home className="mb-3 text-cyan-400" />
                    Villas
                  </div>

                  <div className="rounded-xl bg-white/10 p-5 text-white">
                    <Mountain className="mb-3 text-cyan-400" />
                    Mountain Stays
                  </div>

                  <div className="rounded-xl bg-white/10 p-5 text-white">
                    <Trees className="mb-3 text-cyan-400" />
                    Farm & Estate Stays
                  </div>

                </div>
              </div>

            </div>
                        {/* RIGHT SIDE */}

            <div className="bg-white p-10 lg:p-16">

              <span className="rounded-full bg-cyan-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                CONNECT WITH US
              </span>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                Travelers & Property Owners
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                Looking for the perfect holiday destination?
                <br />
                Or do you own a resort, villa, homestay, estate stay, farm stay
                or beach property?
                <br />
                Join Waves & Mist and connect with thousands of travelers.
              </p>

              <div className="mt-10 space-y-4">

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  🏨  <h4 className="font-semibold text-black">Resort Listing</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  🏖️  <h4 className="font-semibold text-black">Beach Villa Listing</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  🏡  <h4 className="font-semibold text-black">Homestay Listing</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  🌿  <h4 className="font-semibold text-black">Estate & Farm Stay Listing</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  ⛰️  <h4 className="font-semibold text-black">Mountain Stay Listing</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 transition hover:bg-cyan-50">
                  📈  <h4 className="font-semibold text-black">Free Promotion & Booking Support</h4>
                </div>

              </div>

              <div className="mt-10 space-y-5">

                <WhatsAppButton
                  message={`Hello Waves & Mist,

I would like to book a stay.

Please share:

• Available Properties
• Best Packages
• Prices
• Photos

Thank you.`}
                  className="w-full justify-center !bg-cyan-600 hover:!bg-cyan-700 !text-white !py-4 text-base"
                >
                  Book Your Stay
                </WhatsAppButton>

                <WhatsAppButton
                  message={`Hello Waves & Mist,

I would like to list my property.

Property Type:

Location:

Please share:

• Listing Process
• Commission Details
• Required Documents
• Promotion Options

Thank you.`}
                  className="w-full justify-center !bg-green-600 hover:!bg-green-700 !text-white !py-4 text-base"
                >
                  List Your Property
                </WhatsAppButton>

              </div>

              <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white">

                <h4 className="text-2xl font-bold">
                  Why Join Waves & Mist?
                </h4>

                <ul className="mt-5 space-y-3 text-white/90">

                  <li>✔ Reach thousands of travelers</li>

                  <li>✔ Free property promotion</li>

                  <li>✔ Easy WhatsApp bookings</li>

                  <li>✔ Trusted tourism platform</li>

                  <li>✔ Dedicated customer support</li>

                </ul>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}