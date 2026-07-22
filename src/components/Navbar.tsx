"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stays", label: "Destinations" },
  { href: "#book", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-2xl shadow-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <a href="#home" className="flex items-center gap-4">

            <Image
              src="/images/logo.jpeg"
              alt="Waves & Mist"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />

            <div>

              <h2 className="text-2xl font-bold text-white">
                Waves & Mist
              </h2>

              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Tourism
              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">

            {LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium uppercase tracking-widest text-white transition duration-300 hover:text-cyan-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <WhatsAppButton
              message={`Hello Waves & Mist,

I would like to list my property.

Please share the details.`}
              className="!bg-white !text-slate-900 hover:!bg-cyan-400 hover:!text-white"
            >
              List Property
            </WhatsAppButton>

            <WhatsAppButton
              message={`Hello Waves & Mist,

I would like to book a stay.`}
              className="!bg-cyan-500 hover:!bg-cyan-600 !text-white"
            >
              Book Now
            </WhatsAppButton>

          </div>

          {/* Mobile Button */}

        <button
  type="button"
  onClick={() => setMobileOpen(!mobileOpen)}
  className="block lg:hidden text-white z-[999]"
>
            {mobileOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>

        </nav>
      </header>
            {/* Mobile Menu */}

      <div
        className={`fixed top-24 left-0 right-0 z-40 overflow-hidden bg-black/90 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "max-h-[700px] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-8 px-8 py-10">

          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 pb-4 text-lg font-medium text-white transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}

          <div className="space-y-4 pt-4">

            <WhatsAppButton
              message={`Hello Waves & Mist,

I would like to book a stay.

Please share available properties.`}
              className="w-full justify-center !bg-cyan-500 hover:!bg-cyan-600 !text-white"
            >
              Book Your Stay
            </WhatsAppButton>

            <WhatsAppButton
              message={`Hello Waves & Mist,

I would like to list my property.

Please share the listing process.`}
              className="w-full justify-center !bg-green-600 hover:!bg-green-700 !text-white"
            >
              List Your Property
            </WhatsAppButton>

          </div>

        </div>
      </div>
    </>
  );
}