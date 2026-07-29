"use client";

import { packages } from "@/components/data/packages";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown, X, CalendarDays, MapPin, Star, IndianRupee } from "lucide-react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// Animation presets — reused across sections so motion feels consistent site-wide.
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};  
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function PackagePage() {
  const params = useParams();

  // NOTE: moved above the early return — hooks can't run conditionally,
  // and the original had this after `notFound()`, which breaks React.
  const [showBooking, setShowBooking] = useState(false);

  const packageData = packages.find(
    (item) => item.slug === params.slug
  );

  if (!packageData) return notFound();

  const GOOGLE_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLSc68NYoH_QRn9HGc3DDjtCozqvQZQ1PIcM3oPfUAX4zmwZghA/viewform?embedded=true";

  return (
    <main className={`${inter.variable} bg-white font-[family-name:var(--font-body)]`}>

      {/* HERO */}

<section className="relative min-h-screen lg:h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={packageData.image}
            alt={packageData.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/80 via-[#0A1F44]/40 to-[#0A1F44]/85" />

        <div className="absolute inset-0 flex items-center">

<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-0">
            {/* LEFT */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-2xl text-white"
            >

              <motion.span
                variants={heroItem}
                className="rounded-md bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 ring-1 ring-white/20"
              >
                {packageData.badge}
              </motion.span>

              <motion.h1
                variants={heroItem}
                className="mt-6 text-l font-semibold leading-tight md:text-5xl"
              >
                {packageData.title}
              </motion.h1>

              {packageData.subtitle && (
                <motion.p variants={heroItem} className="mt-2 text-base text-white/70">
                  {packageData.subtitle}
                </motion.p>
              )}

              <motion.p
                variants={heroItem}
                className="mt-4 flex items-center gap-2 text-base text-white/80"
              >
                <MapPin size={16} />
                {packageData.location}
              </motion.p>

              {packageData.heroDescription && (
                <motion.p variants={heroItem} className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                  {packageData.heroDescription}
                </motion.p>
              )}

              <motion.div variants={heroItem} className="mt-6 flex flex-wrap gap-3 text-sm">

                <div className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/15">
                  <CalendarDays size={16} />
                  {packageData.duration}
                </div>

                <div className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/15">
                  <Star size={16} className="fill-white text-white" />
                  {packageData.rating}
                </div>

              </motion.div>

              <motion.button
                variants={heroItem}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("overview")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0A1F44] transition hover:bg-white/90"
              >
                Explore Package
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>

            </motion.div>

            {/* BOOKING CARD */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xs rounded-xl border border-white/10 bg-white/95 p-6 text-[#0A1F44] shadow-xl"
            >

              <p className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60">
                Starting From
              </p>

              <div className="mt-2 flex items-center text-3xl font-semibold">
                <IndianRupee size={26} />
                {packageData.price.replace("₹", "")}
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#0A1F44]/80">
                <div className="flex items-center gap-2">
                  <Star size={16} className="shrink-0 fill-[#0A1F44] text-[#0A1F44]" />
                  Instant Confirmation
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="shrink-0 fill-[#0A1F44] text-[#0A1F44]" />
                  Free Consultation
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="shrink-0 fill-[#0A1F44] text-[#0A1F44]" />
                  No Hidden Charges
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="shrink-0 fill-[#0A1F44] text-[#0A1F44]" />
                  Premium Resorts
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBooking(true)}
                className="mt-6 w-full rounded-md bg-[#0A1F44] py-3 text-sm font-medium text-white transition hover:bg-[#0A1F44]/90"
              >
                Book This Package
              </motion.button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}

      <section id="overview" className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.span
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60"
            >
              Discover
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold text-[#0A1F44]">
              Experience Luxury Like Never Before
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-slate-600">
              {packageData.overview}
            </motion.p>

            {packageData.stats?.length > 0 && (
              <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-4">
                {packageData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <p className="text-2xl font-semibold text-[#0A1F44]">{stat.number}</p>
                    <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={packageData.image}
              alt={packageData.title}
              width={700}
              height={700}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

        </div>

      </section>

      {/* HIGHLIGHTS */}

      {packageData.highlights?.length > 0 && (
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-6xl px-6">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-center text-3xl font-semibold text-[#0A1F44]"
            >
              Package Highlights
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-3 max-w-2xl text-center text-base text-slate-500"
            >
              Carefully designed experiences that make your journey
              memorable from start to finish.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >

              {packageData.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-slate-100 bg-white p-6 transition hover:shadow-md"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0A1F44]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}

            </motion.div>

          </div>

        </section>
      )}

      {/* GALLERY */}

      {packageData.gallery?.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60">
                Gallery
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
                Explore Beautiful Moments
              </h2>
              <p className="mt-3 text-base text-slate-500">
                Every destination tells a story. Here's a glimpse of your unforgettable journey.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
            >

              {packageData.gallery.map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className={
                    index === 0
                      ? "col-span-2 row-span-2 overflow-hidden rounded-xl"
                      : "overflow-hidden rounded-xl"
                  }
                >
                  <Image
                    src={src}
                    alt=""
                    width={index === 0 ? 700 : 500}
                    height={index === 0 ? 700 : 500}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}

            </motion.div>

          </div>
        </section>
      )}

      {/* ITINERARY */}

      {packageData.itinerary?.length > 0 && (
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-4xl px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60">
                Journey Plan
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
                Day Wise Itinerary
              </h2>
            </motion.div>

            <div className="relative mt-14 border-l-2 border-slate-200 pl-8">

              {packageData.itinerary.map((stop, index) => (
                <motion.div
                  key={stop.day}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-10"
                >

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                    className="absolute -left-[41px] flex h-9 w-9 items-center justify-center rounded-full bg-[#0A1F44] text-sm font-medium text-white"
                  >
                    {stop.day}
                  </motion.div>

                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0A1F44]">
                      Day {stop.day}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {stop.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {stop.description}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* INCLUSIONS */}

    

      {/* WHY US */}

      {packageData.whyChoose?.length > 0 && (
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-6xl px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60">
                Why Waves & Mist
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
                Travel With Confidence
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >

              {packageData.whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0A1F44]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}

            </motion.div>

          </div>

        </section>
      )}

      {/* TESTIMONIALS */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-[#0A1F44]/60">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
              What Our Travelers Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >

            {[
              { name: "Rahul", place: "Chennai", review: "One of the best travel experiences we've ever had. Everything was perfectly organized." },
              { name: "Priya", place: "Bangalore", review: "Luxury stay, beautiful resorts and amazing customer support. Highly recommended." },
              { name: "Arun", place: "Coimbatore", review: "Worth every penny. Waves & Mist exceeded our expectations." },
            ].map((item, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-8 transition hover:shadow-md"
              >
                <div className="text-sm tracking-wider text-[#0A1F44]">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  "{item.review}"
                </p>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-[#0A1F44]">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.place}</p>
                </div>
              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* BOOKING CTA */}

      <section className="relative overflow-hidden bg-[#0A1F44] py-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl px-6 text-center text-white"
        >

          <span className="rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-wide">
            🌴 Waves & Mist
          </span>

          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
            Ready for Your Next Adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Book your dream vacation today and let us create an unforgettable
            travel experience filled with beaches, mountains, luxury stays,
            and beautiful memories.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowBooking(true)}
            className="mt-8 rounded-md bg-white px-8 py-3 text-sm font-medium text-[#0A1F44] transition hover:bg-white/90"
          >
            ✈️ Book This Package
          </motion.button>

        </motion.div>

      </section>

      {/* BOOKING MODAL */}

      <AnimatePresence>
        {showBooking && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1F44]/60 p-4 backdrop-blur-sm"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[92vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
            >

              <button
                onClick={() => setShowBooking(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
              >
                <X size={20} className="text-[#0A1F44]" />
              </button>

              <div className="border-b bg-[#0A1F44] px-8 py-5 text-white">
                <h2 className="text-xl font-semibold">
                  Book {packageData.title}
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Fill in your details and our travel expert will contact you shortly.
                </p>
              </div>

              <iframe
                src={GOOGLE_FORM}
                className="h-[calc(100%-84px)] w-full"
                loading="lazy"
              />

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>
    </main>
  );
}