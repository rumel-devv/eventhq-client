"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6">
      {/* Background Glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-400/30 bg-red-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="9" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l6 6M15 9l-6 6"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="mt-8 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-7xl font-extrabold text-transparent">
          401
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-white">
          Access Denied
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300">
          Sorry, you do not have permission to access this page.
          <br />
          Please log in with the appropriate account or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500"
          >
            🏠 Go Home
          </Link>

          <button
            onClick={() => router.back()}
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            ← Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          Error Code: <span className="font-semibold text-red-400">401 Unauthorized</span>
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;