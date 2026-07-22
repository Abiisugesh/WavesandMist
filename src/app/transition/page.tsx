"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function TransitionPages() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/destination");
    }, 6000); // 👈 Change this value

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-black"
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-screen w-screen object-cover"
      >
        <source src="/videos/globe.mp4" type="video/mp4" />
      </video>

      <button
        onClick={() => router.push("/destination")}
        className="absolute right-8 top-8 rounded-full bg-black/60 px-5 py-2 text-white backdrop-blur"
      >
        Skip →
      </button>
    </motion.main>
  );
}