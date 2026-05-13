function Sidebar() {
  return (
    <div className="w-64 bg-[#0B1020] border-r border-gray-800 p-6">

      <h1 className="text-2xl font-bold mb-10">
        GuestList Pro
      </h1>

      <div className="flex flex-col gap-4">

        <button className="text-left px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
          Dashboard
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition">
          Events
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition">
          Guest Lists
        </button>

      </div>

    </div>
  );
}

export default Sidebar;