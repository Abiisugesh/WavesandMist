"use client";

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

      {/* ================= ABOUT SECTION ================= */}

      {/* <section className="mx-auto max-w-7xl px-6 py-32">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="text-center text-cyan-600 uppercase tracking-[0.4em] font-semibold">
            Welcome
          </p>

          <h2 className="mt-4 text-center font-serif text-5xl font-bold text-slate-900 md:text-6xl">
            Experience Coastal Luxury
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-10 text-slate-600">
            SeaMoon Beach Resort is one of the most peaceful destinations
            near Chothavilai Beach. Surrounded by coconut trees, fresh
            sea breeze and spectacular sunsets, it offers the perfect
            getaway for families, couples and adventure lovers. Whether
            you're planning a weekend escape or a long vacation, every
            moment here is designed to create unforgettable memories.
          </p>

        </motion.div>

      </section> */}
            {/* ================= GALLERY SECTION ================= */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.4em] text-cyan-600 font-semibold">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-serif font-bold text-slate-900">
              Discover Every Corner
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              Explore the beautiful surroundings, luxurious accommodation and
              unforgettable beach views waiting for you.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* Image 1 */}

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/arieal.png"
                alt="Aerial View"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Image 2 */}

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/front.png"
                alt="Front View"
                width={1000}
                height={500}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/farm1.png"
                alt="Front View"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/farm2.png"
                alt="Front View"
                width={1000}
                height={500}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/mount1.png"
                alt="Front View"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src="/images/mount2.png"
                alt="Front View"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= AMENITIES ================= */}

      <section className="bg-gradient-to-b from-slate-50 to-cyan-50 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.4em] text-cyan-600 font-semibold">
              Resort Amenities
            </p>

            <h2 className="mt-4 text-5xl font-serif font-bold text-slate-900">
              Everything You Need
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🏖️",
                title: "Private Beach",
                desc: "Enjoy peaceful walks and beautiful sunsets."
              },
              {
                icon: "🛏️",
                title: "Luxury Rooms",
                desc: "Comfortable rooms with modern interiors."
              },
              {
                icon: "🍽️",
                title: "Restaurant",
                desc: "Fresh seafood and delicious local cuisine."
              },
              {
                icon: "🔥",
                title: "Camp Fire",
                desc: "Evening campfires by the beach."
              },
              {
                icon: "📶",
                title: "Free Wi-Fi",
                desc: "High-speed internet throughout the resort."
              },
              {
                icon: "🚗",
                title: "Parking",
                desc: "Safe and spacious private parking."
              },
              {
                icon: "🚴",
                title: "Adventure",
                desc: "Cycling and beach activities."
              },
              {
                icon: "🌅",
                title: "Sunrise View",
                desc: "Wake up to breathtaking sea views."
              }
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: .6
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04
                }}
                className="rounded-[28px] bg-white p-8 shadow-xl transition-all"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE SECTION ================= */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.4em] text-cyan-600 font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-5xl font-serif font-bold leading-tight text-slate-900">
              A Perfect Blend of
              <br />
              Nature & Comfort
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Whether you're looking for a peaceful family vacation, a romantic
              getaway or an adventurous coastal trip, SeaMoon Beach Resort
              offers everything you need in one unforgettable destination.
            </p>

            <ul className="mt-10 space-y-5 text-lg text-slate-700">

              <li>✅ Beachfront Luxury Stay</li>
              <li>✅ Family Friendly Resort</li>
              <li>✅ Beautiful Sunrise & Sunset</li>
              <li>✅ Local Food Experience</li>
              <li>✅ Adventure Activities</li>

            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Image
              src="/images/front.png"
              alt="Experience"
              width={900}
              height={700}
              className="rounded-[36px] shadow-2xl"
            />

          </motion.div>

        </div>

      </section>
    </main>
  );
}
