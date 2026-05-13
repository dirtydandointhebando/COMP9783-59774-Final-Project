function PartyCard(props) {
  return (
    <div className="bg-[#0B1020] border border-gray-800 rounded-2xl p-5">

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-xl font-bold">
          {props.partyName}
        </h3>

        <span className="text-sm px-3 py-1 rounded-full bg-blue-600">
          {props.guestCount} Guests
        </span>

      </div>

      <div className="flex items-center justify-between">

        <p className="text-gray-400">
          Arrived: {props.arrivedCount}
        </p>

        <button
          onClick={() => props.onDelete(props.id)}
          className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl text-sm"
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default PartyCard;