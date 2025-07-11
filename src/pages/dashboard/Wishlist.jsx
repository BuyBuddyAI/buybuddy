const Wishlist = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Wishlist ❤️</h2>
      <p className="text-gray-700 mb-4">Here are items you've saved for later.</p>

      {/* Wishlist items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src={`https://source.unsplash.com/200x150/?product,${item}`}
              alt={`Product ${item}`}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h4 className="font-semibold text-gray-800">Product {item}</h4>
            <button className="text-sm text-blue-600 hover:underline mt-2">Move to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
