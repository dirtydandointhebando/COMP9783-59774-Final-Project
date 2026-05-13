function EventCard(props) {
  return (
    <div className="bg-[#0B1020] border border-gray-800 rounded-3xl p-6 hover:border-blue-500 transition">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold mb-1">
            {props.name}
          </h2>

          <p className="text-gray-400">
            {props.venue}
          </p>
        </div>

        <span className="text-sm text-gray-400">
          {props.date}
        </span>

      </div>

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm">
            Expected Guests
          </p>

          <p className="text-2xl font-bold">
            {props.expectedGuests}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Arrived
          </p>

          <p className="text-2xl font-bold text-green-400">
            {props.arrivedGuests}
          </p>
        </div>

      </div>

    </div>
  );
}

export default EventCard;