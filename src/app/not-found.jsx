"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/20 blur-[140px] rounded-full" />

      {/* Card */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
          {/* 404 Badge */}
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-500/20 mb-8">
            <span className="text-6xl font-black bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              404
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10">
            The page you're looking for doesn't exist, has been moved,
            or the link may be incorrect.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button
                color="primary"
                size="lg"
                startContent={<FaHome />}
                className="font-semibold min-w-[180px]"
              >
                Back To Home
              </Button>
            </Link>

            <Button
              variant="bordered"
              size="lg"
              startContent={<FaArrowLeft />}
              onPress={() => window.history.back()}
              className="border-white/10 text-white min-w-[180px]"
            >
              Go Back
            </Button>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-sm text-slate-500">
            Need help? Contact support or return to the homepage.
          </p>
        </div>
      </div>
    </div>
  );
}