import { useState } from "react";

function PartyForm(props) {

  const [partyName, setPartyName] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (guestCount > 6) {
      setError("Maximum party size is 6 guests.");
      return;
    }

    const newParty = {
      id: Date.now(),
      partyName,
      guestCount: Number(guestCount),
      arrivedCount: 0
    };

    props.onAddParty(newParty);

    setPartyName("");
    setGuestCount(1);
    setError("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#0B1020] border border-gray-800 rounded-3xl p-6 mb-8"
    >

      <h3 className="text-2xl font-bold mb-6">
        Add Guest Party
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Party name"
          value={partyName}
          onChange={(event) => setPartyName(event.target.value)}
          className="bg-[#050816] border border-gray-700 rounded-xl px-4 py-3"
        />

        <input
          type="number"
          min="1"
          max="6"
          value={guestCount}
          onChange={(event) => setGuestCount(event.target.value)}
          className="bg-[#050816] border border-gray-700 rounded-xl px-4 py-3"
        />

      </div>

      {error && (
        <p className="text-red-400 mt-4">
          {error}
        </p>
      )}

      <button className="mt-6 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-semibold">
        Add Guests
      </button>

    </form>
  );
}

export default PartyForm;