"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-indigo-600/15 via-slate-950 to-slate-950 -z-10" />

      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-center space-y-7">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm text-pink-400 text-[11px] font-semibold uppercase tracking-[0.25em]">
          <FaRocket className="text-[10px]" />
          EventHQ Platform
        </div>

        {/* TITLE (SMALLER + CLEAN) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Discover{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Premium Events
          </span>{" "}
          Effortlessly
        </h1>

        {/* DESCRIPTION (BIGGER + STRONGER) */}
        <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
          EventHQ is a modern event discovery and ticketing platform where organizers
          can create, manage, and grow events while attendees explore concerts,
          festivals, tech conferences, workshops, and exclusive experiences in one seamless place.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">

          <Link href="/events">
            <Button
              radius="full"
              className="h-11 px-6 text-sm font-semibold bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg shadow-pink-500/20 hover:scale-[1.04] transition"
            >
              Explore Events
            </Button>
          </Link>

          <Link href="/organizations/create">
            <Button
              radius="full"
              variant="bordered"
              className="h-11 px-6 text-sm font-semibold border-white/15 text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              Create Organization
            </Button>
          </Link>
        </div>

        {/* SMALL TRUST LINE */}
        <p className="text-xs text-slate-500 pt-4">
          Trusted by thousands of organizers and event lovers worldwide
        </p>

      </div>
    </section>
  );
};

export default Hero;