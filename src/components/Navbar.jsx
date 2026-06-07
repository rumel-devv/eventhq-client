"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";
import Logo from "./Logo";
import Image from "next/image";

import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: session, isPending } = useSession();

  const user = session?.user;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/65 backdrop-blur-md py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-pink-500 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/events"
            className={`text-sm font-medium transition-colors ${
              pathname.startsWith("/events")
                ? "text-pink-500 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Browse Events
          </Link>

          {user && (
            <Link
              href={`/dashboard/${user.role}`}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/dashboard")
                  ? "text-pink-500 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isPending ? null : !user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="inline-flex items-center justify-center font-semibold text-xs text-slate-300 hover:text-white h-9 px-4 rounded-xl hover:bg-white/5 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="inline-flex items-center justify-center font-semibold text-xs bg-gradient-to-r from-pink-500 to-indigo-600 text-white h-9 px-4 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setDropdownOpen(!dropdownOpen)
                }
                className="cursor-pointer"
              >
                <Image
                  src={
                    user.image ||
                    "https://ui-avatars.com/api/?name=User"
                  }
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full border border-pink-500 object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl py-2">
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-pink-400 text-xs uppercase">
                      {user.role || "User"}
                    </p>

                    <p className="font-semibold text-white">
                      {user.name}
                    </p>

                    <p className="text-xs text-slate-400 truncate">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href={`/dashboard/${user.role}`}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
                  >
                    <FaThLarge />
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
                  >
                    <FaUser />
                    Profile Settings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/5"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}