import { useState } from "react";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import EventCard from "./components/EventCard";

import initialEvents from "./data/events";

function App() {
 
  const [events, setEvents] = useState(initialEvents);
 
  const totalEvents = events.length;

  const totalExpectedGuests = events.reduce(
    (total, event) => total + event.expectedGuests,
    0
  );

  const totalArrivedGuests = events.reduce(
    (total, event) => total + event.arrivedGuests,
    0
  );

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Nightlife Dashboard
          </h1>

          <p className="text-gray-400">
            Manage events and guest lists
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <StatsCard
            label="Total Events"
            value={totalEvents}
          />

          <StatsCard
            label="Expected Guests"
            value={totalExpectedGuests}
          />

          <StatsCard
            label="Guests Arrived"
            value={totalArrivedGuests}
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {events.map(event => (
            <EventCard
              key={event.id}
              name={event.name}
              venue={event.venue}
              date={event.date}
              expectedGuests={event.expectedGuests}
              arrivedGuests={event.arrivedGuests}
            />
          ))}

        </div>

      </main>

    </div>
  );
}

export default App;