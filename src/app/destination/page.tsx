"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DestinationPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-cyan-50">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-screen overflow-hidden">

        {/* Background Image */}

        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 12,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/arieal.png"
            alt="SeaMoon Beach Resort"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        {/* Decorative Glow */}

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[180px]" />

        {/* Hero Content */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
        >

        
<motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
  className="mt-8 font-serif text-5xl font-bold leading-tight text-white md:text-7xl xl:text-8xl"
>
  Explore Our
  <br />
  <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
7-Day Luxury Escape  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/90 md:text-2xl"
>
🌾 2 Farm Stays  •  🏖️ 2 Beach Stays  •  ⛰️ 2 Mountain Stays  <br />
  Experience the best of Kanyakumari, Kerala & Tamil Nadu in one unforgettable journey.
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  className="mt-12 flex flex-wrap justify-center gap-5"
>
  <button className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-10 py-4 font-semibold text-white shadow-2xl transition duration-300 hover:scale-105">
    Book 7 Days Package
  </button>

  <button className="rounded-full border border-white/30 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
    View Itinerary
  </button>
</motion.div>

        </motion.div>

        {/* Floating Info Cards */}

       

      </section>

  {/* ================= PACKAGE SECTION ================= */}

<section className="bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="uppercase tracking-[0.4em] text-cyan-600 font-semibold">
        Explore Packages
      </p>

      <h2 className="mt-4 font-serif text-5xl font-bold text-slate-900 md:text-6xl">
        Explore Our 7-Day Luxury Packages
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
        Every package includes handpicked farm stays, beach resorts and
        mountain retreats. Choose the itinerary that suits your dream vacation.
      </p>
    </motion.div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

     {[
  {
    slug: "coastal-bliss",
    image: "/images/kanyakumariu.jpeg",
    title: "Coastal Bliss Escape",
    location: "Kanyakumari",
  },
  {
    slug: "kerala-paradise",
    image: "/images/varkala2.jpeg",
    title: "Kerala Paradise Journey",
    location: "Kerla",
  },
  {
    slug: "karnataka-explorer",
    image: "/images/cover1.jpeg",
    title: "Karnataka Journey",
    location: "Munnar • Vagamon",
  },
  
].map((pkg, index) => (
     

        <motion.div
          key={pkg.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
          }}
        >

          <div className="group overflow-hidden rounded-[30px] bg-white shadow-xl hover:shadow-2xl transition duration-500">

            <div className="relative h-72 overflow-hidden">

              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700">
                7 Days • 6 Nights
              </span>

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold text-slate-900">
                {pkg.title}
              </h3>

              <p className="mt-3 text-slate-500">
                📍 {pkg.location}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

               <span className="rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-slate-900">
  🌾 2 Farm Stays
</span>

<span className="rounded-full bg-cyan-100 px-3 py-2 text-sm font-medium text-slate-900">
  🏖️ 2 Beach Stays
</span>

<span className="rounded-full bg-orange-100 px-3 py-2 text-sm font-medium text-slate-900">
  ⛰️ 2 Mountain Stays
</span>
              </div>

              <Link href={`/packages/${pkg.slug}`}>
  <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 py-3 font-semibold text-white transition duration-300 hover:scale-105">
    Explore Package →
  </button>
</Link>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>
    </main>
  );
}
