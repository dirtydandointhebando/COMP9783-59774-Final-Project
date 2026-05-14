function PartyCard(props) {
  return (
    <div className="bg-[#0B1020] border border-gray-800 rounded-2xl p-5">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-xl font-bold">
          {props.partyName}
        </h3>

        <span className="text-sm px-3 py-1 rounded-full bg-blue-600">
          {props.guestCount} Guests
        </span>

      </div>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm mb-2">
            Check In Progress
          </p>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                props.onUpdateArrivedCount(
                  props.id,
                  -1
                )
              }

              className="bg-gray-800 hover:bg-gray-700 transition w-10 h-10 rounded-xl"
            >
              -
            </button>

            <p className="text-xl font-bold">

              {props.arrivedCount}
              {" / "}
              {props.guestCount}

            </p>

            <button
              onClick={() =>
                props.onUpdateArrivedCount(
                  props.id,
                  1
                )
              }

              className="bg-green-600 hover:bg-green-500 transition w-10 h-10 rounded-xl"
            >
              +
            </button>

          </div>

        </div>

      </div>

        <button
        onClick={() => props.onDeleteParty(props.id)}
        className="mt-6 w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl"
        >
        Remove Party
        </button>
        
    </div>
  );
}

export default PartyCard;