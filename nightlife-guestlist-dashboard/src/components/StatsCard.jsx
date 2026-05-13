function StatsCard(props) {
  return (
    <div className="bg-[#0B1020] border border-gray-800 rounded-3xl p-6">

      <p className="text-gray-400 text-sm mb-2">
        {props.label}
      </p>

      <h2 className="text-4xl font-bold">
        {props.value}
      </h2>

    </div>
  );
}

export default StatsCard;