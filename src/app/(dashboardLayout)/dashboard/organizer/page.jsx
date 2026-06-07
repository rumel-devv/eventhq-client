"use client";

import { Card, Button } from "@heroui/react";
import {
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaTicketAlt,
  FaCrown,
  FaPlus,
} from "react-icons/fa";

const OrganizerOverview = () => {
  const stats = {
    totalEvents: 15,
    totalAttendees: 450,
    totalRevenue: 25000,
    totalSoldTickets: 780,
  };

  const isPremium = false;

  return (
    <div className="space-y-6 mt-6">
      {/* Welcome Section */}
      <Card className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
        <div className="p-5 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Manage your events, track ticket sales and monitor performance in
            real-time.
          </p>
        </div>
      </Card>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {/* Events */}
        <Card className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
          <div className="p-5 md:p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs uppercase">Events</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {stats.totalEvents}
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
              <FaCalendarAlt size={22} />
            </div>
          </div>
        </Card>

        {/* Attendees */}
        <Card className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
          <div className="p-5 md:p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs uppercase">Attendees</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {stats.totalAttendees}
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <FaUsers size={22} />
            </div>
          </div>
        </Card>

        {/* Revenue */}
        <Card className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
          <div className="p-5 md:p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs uppercase">Revenue</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white break-all">
                ${stats.totalRevenue}
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
              <FaDollarSign size={22} />
            </div>
          </div>
        </Card>

        {/* Tickets */}
        <Card className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
          <div className="p-5 md:p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs uppercase">Tickets Sold</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {stats.totalSoldTickets}
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
              <FaTicketAlt size={22} />
            </div>
          </div>
        </Card>
      </div>

      {/* QUICK ACTIONS */}
      <Card className="border border-white/5 bg-white/[0.03] rounded-2xl">
        <div className="p-5 md:p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              color="primary"
              startContent={<FaPlus />}
              className="w-full"
            >
              Create Event
            </Button>

            <Button variant="bordered" className="w-full">
              Manage Events
            </Button>

            <Button variant="bordered" className="w-full">
              View Attendees
            </Button>
          </div>
        </div>
      </Card>

      {/* RECENT EVENTS */}
      <Card className="border border-white/5 bg-white/[0.03] rounded-2xl">
        <div className="p-5 md:p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            Recent Events
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-3">
              <span className="text-white">React Summit 2026</span>
              <span className="text-green-400">120 Sold</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-3">
              <span className="text-white">Startup Meetup</span>
              <span className="text-green-400">85 Sold</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="text-white">Tech Conference</span>
              <span className="text-green-400">210 Sold</span>
            </div>
          </div>
        </div>
      </Card>

      {/* PREMIUM BANNER */}
      {!isPremium && (
        <Card className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-2xl">
          <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white font-bold flex items-center gap-2">
                <FaCrown className="text-yellow-400" />
                Upgrade to Premium
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Unlock unlimited events, analytics & priority support.
              </p>
            </div>

            <Button className="bg-yellow-500 text-black font-bold w-full md:w-auto">
              Upgrade Now
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default OrganizerOverview;