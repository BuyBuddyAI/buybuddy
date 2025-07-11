const Settings = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md max-w-xl">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Account Settings ⚙️</h2>

      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
