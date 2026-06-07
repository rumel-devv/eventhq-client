"use client";

export default function Statistics({ stats }) {
  const items = [
    {
      value: `${stats.totalEvents}+`,
      label: "Premium Events Held",
    },
    {
      value: `${stats.totalAttendees.toLocaleString()}+`,
      label: "Happy Attendees",
    },
    {
      value: `${stats.totalOrgs}+`,
      label: "Vetted Organizations",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-indigo-500/5 to-cyan-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500"
            >
              <div className="space-y-4 text-center">
                <h3 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-800 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 group-hover:w-24 transition-all duration-500" />

                <p className="text-slate-300 font-semibold uppercase tracking-[0.2em] text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}