const DashboardHome = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome Back 👋</h2>
      <p className="text-gray-700 mb-6">
        This is your personalized dashboard. Track your orders, wishlist, and manage your settings here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 text-blue-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Orders</h4>
          <p className="text-sm mt-1">View your recent and past orders.</p>
        </div>
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Wishlist</h4>
          <p className="text-sm mt-1">Your saved items at a glance.</p>
        </div>
        <div className="bg-purple-100 text-purple-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Settings</h4>
          <p className="text-sm mt-1">Update profile and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
