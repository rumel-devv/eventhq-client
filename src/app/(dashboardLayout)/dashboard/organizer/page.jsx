import UpgradePremiumButton from "@/components/UpgradePremiumButton";
import { getUser } from "@/lib/api/session";
import { Card, Button } from "@heroui/react";
import {
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaTicketAlt,
  FaCrown,
  FaPlus,
} from "react-icons/fa";

const OrganizerOverview = async () => {
  const stats = {
    totalEvents: 15,
    totalAttendees: 450,
    totalRevenue: 25000,
    totalSoldTickets: 780,
  };
  const user = await getUser();
  const isPremium = user?.isPremium;


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
                  {!isPremium ? (
                <Card className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-amber-600/5 to-transparent relative overflow-hidden" radius="lg">
                    <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaCrown className="text-yellow-400" /> Unlock Unlimited Event Creation</h3>
                            <p className="text-slate-400 text-xs max-w-xl leading-relaxed">Standard organizer accounts are limited to <strong>3 events</strong>. Upgrade to our Premium Package for <strong>$49.00</strong> to host unlimited events.</p>
                        </div>
                        <UpgradePremiumButton/>
                     
                    </div>
                </Card>
            ) : (
                <Card className="border border-green-500/20 bg-gradient-to-r from-green-500/5 via-amber-600/5 to-transparent relative overflow-hidden" radius="lg">
                    <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaCrown className="text-green-400" /> Welcome to premium dashboard</h3>
                            <p className="text-slate-400 text-xs max-w-xl leading-relaxed">You can create more then 3 events now...</p>
                        </div>

                    </div>
                </Card>
            )}
    </div>
  );
};

export default OrganizerOverview;