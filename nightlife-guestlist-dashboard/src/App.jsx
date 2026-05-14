import { useState } from "react";

import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import EventCard from "./components/EventCard";
import EventForm from "./components/EventForm";
import PartyForm from "./components/PartyForm";
import PartyCard from "./components/PartyCard";

import initialEvents from "./data/events";

function App() {

  const [events, setEvents] = useState(initialEvents);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const totalEvents = events.length;

  const totalExpectedGuests = events.reduce(
    (total, event) =>
      total +
      event.parties.reduce(
        (partyTotal, party) =>
          partyTotal + party.guestCount,
        0
      ),
    0
  );

  const totalArrivedGuests = events.reduce(
    (total, event) =>
      total +
      event.parties.reduce(
        (partyTotal, party) =>
          partyTotal + party.arrivedCount,
        0
      ),
    0
  );

  const addEventHandler = (newEvent) => {

    const updatedEvent = {
      ...newEvent,
      parties: []
    };

    setEvents([
      ...events,
      updatedEvent
    ]);
  };

  const deleteEventHandler = (id) => {

    const updatedEvents = events.filter(
      event => event.id !== id
    );

    setEvents(updatedEvents);

    if (selectedEvent?.id === id) {
      setSelectedEvent(null);
    }
  };

  const selectEventHandler = (event) => {
    setSelectedEvent(event);
  };

  const addPartyHandler = (newParty) => {
    
    const updatedEvents = events.map(event => {

      if (event.id === selectedEvent.id) {

        return {
          ...event,

          parties: [
            ...event.parties,
            newParty
          ]
        };
      }

      return event;
    });

    setEvents(updatedEvents);

    const updatedSelectedEvent = updatedEvents.find(
      event => event.id === selectedEvent.id
    );

    setSelectedEvent(updatedSelectedEvent);
  };

  const updateArrivedCountHandler = (
    partyId,
    change
  ) => {

    const updatedEvents = events.map(event => {

      if (event.id === selectedEvent.id) {

        const updatedParties = event.parties.map(party => {

          if (party.id === partyId) {

            const updatedArrivedCount =
              party.arrivedCount + change;

            if (
              updatedArrivedCount < 0 ||
              updatedArrivedCount > party.guestCount
            ) {
              return party;
            }

            return {
              ...party,
              arrivedCount: updatedArrivedCount
            };
          }

          return party;
        });

        return {
          ...event,
          parties: updatedParties
        };
      }

      return event;
    });

    setEvents(updatedEvents);

    const updatedSelectedEvent = updatedEvents.find(
      event => event.id === selectedEvent.id
    );

    setSelectedEvent(updatedSelectedEvent);
  };

  const deletePartyHandler = (partyId) => {

  const confirmed = window.confirm(
    "Are you sure you want to remove this party?"
    );

    if (!confirmed) {
      return;
    }

    const updatedEvents = events.map(event => {

      if (event.id === selectedEvent.id) {

        return {
          ...event,

          parties: event.parties.filter(
            party => party.id !== partyId
          )
        };
      }

      return event;
    });

    setEvents(updatedEvents);

    const updatedSelectedEvent = updatedEvents.find(
      event => event.id === selectedEvent.id
    );

    setSelectedEvent(updatedSelectedEvent);
  };

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Guest List & Events Dashboard
          </h1>

          <p className="text-gray-400">
            Manage events and guest list bookings
          </p>

        </div>

        <EventForm onAddEvent={addEventHandler} />

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
              id={event.id}
              event={event}
              name={event.name}
              venue={event.venue}
              date={event.date}

              expectedGuests={
                event.parties.reduce(
                  (total, party) =>
                    total + party.guestCount,
                  0
                )
              }

              arrivedGuests={
                event.parties.reduce(
                  (total, party) =>
                    total + party.arrivedCount,
                  0
                )
              }

              onDelete={deleteEventHandler}
              onSelect={selectEventHandler}
            />

          ))}

        </div>

      </main>

      {selectedEvent && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">

          <div className="bg-[#0B1020] border border-gray-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">

            <div className="flex items-start justify-between mb-8">

              <div>

                <div className="flex items-center gap-4 mb-2">

                  <h2 className="text-4xl font-bold">
                    {selectedEvent.name}
                  </h2>

                  <button
                    onClick={() => {

                      const confirmed = window.confirm(
                        "Are you sure you want to delete this event?"
                      );

                      if (confirmed) {
                        deleteEventHandler(selectedEvent.id);
                      }

                    }}

                    className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl text-sm"
                  >
                    Delete Event
                  </button>

                </div>

                <p className="text-gray-400">
                  {selectedEvent.venue}
                </p>

              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-xl"
              >
                Close
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

              <StatsCard
                label="Total Parties"
                value={selectedEvent.parties.length}
              />

              <StatsCard
                label="Expected Guests"
                value={
                  selectedEvent.parties.reduce(
                    (total, party) =>
                      total + party.guestCount,
                    0
                  )
                }
              />

              <StatsCard
                label="Guests Arrived"
                value={
                  selectedEvent.parties.reduce(
                    (total, party) =>
                      total + party.arrivedCount,
                    0
                  )
                }
              />

            </div>

            <PartyForm onAddParty={addPartyHandler} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {selectedEvent.parties.map(party => (

                <PartyCard
                  key={party.id}
                  id={party.id}
                  partyName={party.partyName}
                  guestCount={party.guestCount}
                  arrivedCount={party.arrivedCount}
                  onUpdateArrivedCount={updateArrivedCountHandler}
                  onDeleteParty={deletePartyHandler}
                />

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;