import Link from "next/link";
import {
  FaTicketAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 pt-16 pb-10 overflow-hidden">

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-pink-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

        {/* BRAND */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-pink-500 to-indigo-500 p-2 rounded-lg text-white">
              <FaRegCalendarAlt className="text-lg"/>
            </div>

            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-pink-500 bg-clip-text text-transparent">
              EventHQ
            </span>
          </Link>

          <p className="text-slate-400 text-sm leading-relaxed">
            Next-generation event discovery and ticket booking platform.
          </p>

          <div className="flex gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500/10 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* DISCOVER */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Discover
          </h3>

          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/events?category=Music" className="hover:text-white">Music</Link></li>
            <li><Link href="/events?category=Tech" className="hover:text-white">Tech</Link></li>
            <li><Link href="/events?category=Sports" className="hover:text-white">Sports</Link></li>
            <li><Link href="/events?category=Arts" className="hover:text-white">Arts</Link></li>
          </ul>
        </div>

        {/* ORGANIZERS */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Organizers
          </h3>

          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/register?role=organizer" className="hover:text-white">Create Event</Link></li>
            <li><Link href="/login" className="hover:text-white">Host Event</Link></li>
            <li><Link href="/login" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* GET IN TOUCH (COMPACT HORIZONTAL STYLE) */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            Contact
          </h3>

          <div className="space-y-3">

            {/* Email */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                <FaEnvelope size={13} />
              </div>
              <a href="mailto:support@ticketo.com" className="text-slate-300 hover:text-white">
                support@ticketo.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <FaPhoneAlt size={13} />
              </div>
              <a href="tel:+8801700000000" className="text-slate-300 hover:text-white">
                +880 1700-000000
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-10 pt-6 text-center text-slate-500 text-xs">
        <p>
          © {new Date().getFullYear()} Ticketo Inc. All rights reserved. Created by Rumel Ahmed.
        </p>
      </div>

    </footer>
  );
}