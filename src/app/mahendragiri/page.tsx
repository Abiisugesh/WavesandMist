"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function MahendragiriContent() {
  const searchParams = useSearchParams();

  const [showForm, setShowForm] = useState(false);

  const place = searchParams.get("place") || "mahendragiri";

  const isEcoResort = place === "eco-resort";

  // Package details
  const packageName = isEcoResort
  ? "Farm Stay"
  : "Mahendragiri";

  const location = isEcoResort
    ? "Santhapuram, Nagercoil"
    : "Tirunelveli, Tamil Nadu";

  const locationShort = isEcoResort
    ? "Santhapuram,Nagercoil"
    : "Tirunelveli";

  const image = isEcoResort
    ? "/images/eco2.png"
    : "/images/img7.png";

  const price = isEcoResort
  ? "₹1,000"
  : "₹1,000"
   const food=isEcoResort
   ? "Extra Charges"
   : "Included"
  const duration=isEcoResort
  ? "1 Day / 1 Night - ₹1,000"
  : "1 Day / 1 Night - ₹2,000"

  const durations=isEcoResort
  ? " -"
  : "1 Day - ₹1,000"
  
  const images = isEcoResort
  ? [
      "/images/eco1.png",
      "/images/eco2.png",
      "/images/eco10.png",
      "/images/eco11.png",
      "/images/eco5.png",
      "/images/eco9.png",
    ]
  : [
      "/images/img9.png",
      "/images/img3.png",
      "/images/img4.png",
      "/images/img5.png",
      "/images/img6.png",
      "/images/img7.png",
    ];

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">

        <img
          src={image}
          alt={packageName}
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-14 md:px-12 lg:px-20">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Travel Package
            </p>

            <h1 className="font-display text-5xl font-bold text-white md:text-7xl">
              {packageName}
            </h1>

            <p className="mt-4 text-lg text-white md:text-xl">
              📍 {location}
            </p>

          </div>
        </div>

      </section>


      {/* =========================================================
          PACKAGE CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="lg:col-span-2">

            {/* Section Label */}
            <p className="text-sm font-semibold uppercase tracking-widest text-black">
              About the package
            </p>


            {/* Package Title */}
            <h2 className="mt-3 font-display text-3xl font-bold text-black md:text-4xl">
              Discover {packageName}
            </h2>


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            {isEcoResort ? (
              <>
                <p className="mt-6 text-black leading-8 text-black">
                  Experience the beautiful coastal atmosphere of
                  Farm Stay in Santhapuram, Nagercoil.
                  Enjoy the golden sands, beautiful ocean views
                  and peaceful surroundings.
                </p>

                <p className="mt-5 text-black leading-8 text-black">
                  Relax by the beach, enjoy the tropical scenery
                  and create unforgettable memories while
                  exploring one of the beautiful coastal
                  destinations of southern Tamil Nadu.
                </p>
              </>
            ) : (
              <>
                <p className="mt-6 text-base leading-8 text-black">
                  Experience the natural beauty of Mahendragiri
                  in Tirunelveli, Tamil Nadu. Surrounded by
                  mountains, forests and peaceful landscapes,
                  this package is perfect for travellers looking
                  for a refreshing escape into nature.
                </p>

                <p className="mt-5 text-base leading-8 text-black">
                  Enjoy scenic views, peaceful surroundings and
                  an unforgettable travel experience while
                  exploring one of the beautiful destinations
                  of southern Tamil Nadu.
                </p>
              </>
            )}


            {/* =================================================
                PACKAGE HIGHLIGHTS
            ================================================= */}
            <div className="mt-12">

              <h3 className="font-display text-2xl font-bold text-black">
                Package Highlights
              </h3>


              <div className="mt-6 grid gap-5 sm:grid-cols-2">

  {/* Eco-Friendly Stay */}
  <div className="rounded-2xl bg-white p-6 shadow-sm border border-black">
    <div className="text-2xl">
      🌿
    </div>

    <h4 className="mt-4 font-semibold text-black">
      Eco-Friendly Stay
    </h4>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Stay in a peaceful eco-friendly resort surrounded by
      natural beauty and sustainable surroundings.
    </p>
  </div>


  {/* Nature & Greenery */}
  <div className="rounded-2xl bg-white p-6 shadow-sm border border-black">
    <div className="text-2xl">
      🌴
    </div>

    <h4 className="mt-4 font-semibold text-black">
      Nature & Greenery
    </h4>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Enjoy lush greenery, fresh air, and a relaxing atmosphere
      close to nature.
    </p>
  </div>


  {/* Sustainable Experience */}
  <div className="rounded-2xl bg-white p-6 shadow-sm border border-black">
    <div className="text-2xl">
      ♻️
    </div>

    <h4 className="mt-4 font-semibold text-black">
      Sustainable Experience
    </h4>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Experience responsible tourism with eco-conscious
      practices designed to protect the environment.
    </p>
  </div>


  {/* Peaceful Escape */}
  <div className="rounded-2xl bg-white p-6 shadow-sm border border-black">
    <div className="text-2xl">
      🏡
    </div>

    <h4 className="mt-4 font-semibold text-black">
      Peaceful Escape
    </h4>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Relax away from the busy city and reconnect with nature
      in a calm and refreshing environment.
    </p>
  </div>

</div>

            </div>


            {/* =================================================
                WHAT'S INCLUDED
            ================================================= */}
            {/* <div className="mt-12">

              <h3 className="font-display text-2xl font-bold text-black">
                What&apos;s Included
              </h3>


              {isEcoResort ? (
                <ul className="mt-6 space-y-4 text-gray-600">
                  <li>✓ Beach visit</li>
                  <li>✓ Local transportation</li>
                  <li>✓ Guided experience</li>
                  <li>✓ Nature exploration</li>
                  <li>✓ Local sightseeing</li>
                </ul>
              ) : (
                <ul className="mt-6 space-y-4 text-gray-600">
                  <li>✓ Accommodation</li>
                  <li>✓ Local transportation</li>
                  <li>✓ Guided experience</li>
                  <li>✓ Nature exploration</li>
                  <li>✓ Local sightseeing</li>
                </ul>
              )}

            </div> */}

          </div>


          {/* =====================================================
              PRICE CARD
          ===================================================== */}
          <div>

            <div className="sticky top-8 rounded-3xl bg-white p-7 shadow-lg border border-black">

              {/* Price Label */}
              <p className="text-sm text-gray-500">
                Package Price
              </p>


              {/* Price */}
              <div className="mt-2">

                <span className="text-4xl font-extrabold text-black">
                  {price}
                </span>

                <span className="ml-2 text-gray-500">
                  / person
                </span>

              </div>
              
              
              


              {/* Divider */}
              <div className="my-7 h-px bg-gray-200" />


              {/* Package Information */}
              <div className="space-y-5">
                {/* Destination */}
                <div className="flex items-center justify-between gap-4">

                  <span className="text-gray-500">
                    🏝️ Destination
                  </span>

                  <span className="text-right font-semibold text-black">
                    {packageName}
                  </span>

                </div>

                {/* Location */}
                {/* <div className="flex items-center justify-between gap-4">

                  <span className="text-gray-500">
                    📍 Location
                  </span>

                  <span className="text-right font-semibold text-black">
                    {locationShort}
                  </span>

                </div> */}
                <div className="flex items-center justify-between gap-4">

                  <span className="text-gray-500">
                   🌴 Durations
                  </span>

                  <span className="text-right font-semibold text-black">
                    {duration}
                  </span>

                </div>
                <div className="flex items-center justify-between gap-4">

                  <span className="text-gray-500">
                    
                  </span>

                  <span className="text-right font-semibold text-black">
                    {durations}
                  </span>

                </div>
                <div className="flex items-center justify-between gap-4">

                  <span className="text-gray-500">
                    👤  Per Person
                  </span>

                  <span className="text-right font-semibold text-black">
                    {price}
                  </span>

                </div>
                <div className="flex item center justify-between">
                  <span className="text-gray-500"> 🍴 Food</span>
                  <span className="text-black font-semibold text-right">{food}</span>
                </div>


                {/* Guests */}
                {/* <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    👤 Guests
                  </span>

                  <span className="font-semibold text-black">
                    Per Person
                  </span>

                </div> */}


                

              </div>


              <button
  onClick={() => setShowForm(true)}
  className="
    mt-8
    w-full
    rounded-full
    bg-gradient-to-r
    from-cyan-500
    to-emerald-500
    px-6
    py-3.5
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
  "
>
  Book This Package →
</button>

            </div>

          </div>
          

        </div>
        {/* =========================================================
    IMAGE GALLERY
========================================================= */}
        {/* =========================================================
    IMAGE GALLERY
========================================================= */}
<section className="bg-white px-4 py-12 md:px-8 lg:px-10">

  <div className="mx-auto max-w-7xl">

    {/* Gallery Title */}
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black text-center">
        Explore
      </p>
      <p className="text-2xl  text-black text-center p-2">
        Explore Beautiful Moments
      </p>
      <p className="text-xl   text-black text-center">
        Every destination tells a story. Here's a glimpse of your unforgettable journey.
      </p>
      {/* <h2 className="mt-2 font-display text-4xl font-bold text-black md:text-4xl text-center">
        {packageName} Gallery
      </h2> */}
    </div>


    {/* Gallery */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

      {/* =====================================================
          LARGE IMAGE
          Takes 2 rows
      ===================================================== */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
          md:col-span-1
          md:row-span-2
        "
      >

        <img
          src={images[0]}
          alt={`${packageName} 1`}
          className="
            h-[400px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            md:h-full
          "
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>


      {/* =====================================================
          IMAGE 2
      ===================================================== */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        "
      >

        <img
          src={images[1]}
          alt={`${packageName} 2`}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            md:h-full
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>


      {/* =====================================================
          IMAGE 3
      ===================================================== */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        "
      >

        <img
          src={images[2]}
          alt={`${packageName} 3`}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            md:h-full
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>


      {/* =====================================================
          IMAGE 4
      ===================================================== */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        "
      >

        <img
          src={images[3]}
          alt={`${packageName} 4`}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            md:h-full
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>


      {/* =====================================================
          IMAGE 5
      ===================================================== */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        "
      >

        <img
          src={images[4]}
          alt={`${packageName} 5`}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            md:h-full
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>

    </div>


    {/* =====================================================
        SIXTH IMAGE
    ===================================================== */}
    <div className="mt-4">
     <h1>Gallery</h1>
      <div
        className="
          group
          relative
          h-72
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        "
      >

        <img
          src={images[5]}
          alt={`${packageName} 6`}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

      </div>

    </div>

  </div>

</section>


        {/* =====================================================
            BACK BUTTON
        ===================================================== */}
        <div className="mt-12">

  <Link
    href="/"
    className="font-medium text-black hover:underline"
  >
    ← Back to stays
  </Link>

</div>

</section>


{/* =========================================================
    GOOGLE FORM POPUP
========================================================= */}
{showForm && (
  <div
    className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/60
      p-4
      backdrop-blur-sm
    "
    onClick={() => setShowForm(false)}
  >

    {/* Popup Container */}
    <div
      className="
        relative
        h-[90vh]
        w-full
        max-w-3xl
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-2xl
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button */}
      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="
          absolute
          right-4
          top-4
          z-10
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-black
          text-2xl
          font-bold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:bg-gray-800
        "
        aria-label="Close booking form"
      >
        ×
      </button>


      {/* Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSezDIKReXgiNt5N3q-xE10OvRVDlvAGHWWP8vm9S0sJvdKJLQ/viewform?usp=publish-editor"
        title="Booking Form"
        className="h-full w-full"
      />

    </div>

  </div>
)}


</main>
  );
}
export default function MahendragiriPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MahendragiriContent />
    </Suspense>
  );
}