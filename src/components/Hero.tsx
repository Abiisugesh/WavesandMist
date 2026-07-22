"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import WaveDivider from "./WaveDivider";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Floating Mist */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-[120px] animate-drift" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-cyan-200/10 blur-[150px] animate-drift-slow" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px] animate-drift-slower" />
      </div>

      {/* Mountain Layer */}
      <svg
        className="absolute bottom-0 left-0 w-full text-black/40"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0 320V170L120 120L220 160L330 80L470 170L620 70L760 150L920 60L1080 170L1200 120V320Z"
          fill="currentColor"
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">

    

        {/* Brand Tagline */}


{/* Main Heading */}
<motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 1 }}
  className="mt-25 font-display text-5xl font-bold leading-tight text-white md:text-7xl xl:text-8xl"
>
  Explore the
  <br />

  <span className="bg-gradient-to-r from-cyan-300 via-white to-green-300 bg-clip-text text-transparent">
    Beauty of South India
  </span>
</motion.h1>
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-8 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300 md:text-base"
>
  Think India. Think Waves & Mist.
</motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: 1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 md:text-xl"
        >
          Discover Mountain Stays, Estate Resorts,
          Beach Villas, Farm Stays,
          Waterfalls, Adventure Tours and Hidden
          Destinations across Kanyakumari,
          Kerala & Tamil Nadu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5, duration: .8 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
       <Link
  href="/transition"
  className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-cyan-600"
>
🏖️ Explore Your 7-Day Journey</Link>

          
        </motion.div>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-20 grid grid-cols-3 gap-8 text-white"
        >
          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
              Destinations
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">300+</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
              Properties
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">2K+</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
              Happy Travelers
            </p>
          </div>
        </motion.div>
                {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="mb-3 text-xs uppercase tracking-[0.35em]">
              Scroll
            </span>

            <div className="flex h-14 w-8 justify-center rounded-full border border-white/40">
              <div className="mt-2 h-3 w-1 rounded-full bg-white animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/60 to-transparent" />

      {/* Floating Fog */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-15%] h-32 w-[140%] rounded-full bg-white/10 blur-[80px] animate-drift" />

        <div className="absolute bottom-10 left-[10%] h-24 w-[120%] rounded-full bg-cyan-100/10 blur-[100px] animate-drift-slow" />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 z-20 w-full text-white/90">
        <WaveDivider />
      </div>

      {/* Decorative Light */}
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />
    </section>
  );
}