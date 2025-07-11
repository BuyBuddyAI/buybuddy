const Orders = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Orders 📦</h2>
      <p className="text-gray-700 mb-4">Track your recent and past orders.</p>

      {/* Placeholder orders */}
      <div className="space-y-4">
        {[1, 2, 3].map((order) => (
          <div key={order} className="border p-4 rounded-md shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Order #{order}2025</h4>
                <p className="text-sm text-gray-600">Delivered on July 1, 2025</p>
              </div>
              <button className="text-blue-600 hover:underline">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
