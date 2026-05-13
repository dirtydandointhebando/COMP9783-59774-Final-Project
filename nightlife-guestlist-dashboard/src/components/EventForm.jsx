import { useState } from "react";

function EventForm(props) {

  const [eventName, setEventName] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newEvent = {
      id: Date.now(),
      name: eventName,
      venue,
      date,
      expectedGuests: 0,
      arrivedGuests: 0
    };

    props.onAddEvent(newEvent);

    setEventName("");
    setVenue("");
    setDate("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#0B1020] border border-gray-800 rounded-3xl p-6 mb-10"
    >

      <h2 className="text-2xl font-bold mb-6">
        Create Event
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Event name"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
          className="bg-[#050816] border border-gray-700 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(event) => setVenue(event.target.value)}
          className="bg-[#050816] border border-gray-700 rounded-xl px-4 py-3"
        />

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="bg-[#050816] border border-gray-700 rounded-xl px-4 py-3"
        />

      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-semibold">
        Add Event
      </button>

    </form>
  );
}

export default EventForm;