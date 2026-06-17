import EventCard from "@/components/EventCard";
import { fetchEvents } from "@/lib/api/events/data";

const EventsList = async ({ search, category, location }) => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (category) params.set("category", category);
  if (location) params.set("location", location);

  const events = await fetchEvents(params);

  if (!events.length) {
    return (
      <p className="text-center text-slate-400 py-16">No events found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event._id} event={event} buttonText="View Details" />
      ))}
    </div>
  );
};

export default EventsList;