const categories = [
  "Electronics", "Fashion", "Home & Kitchen", "Books", "Health", "Beauty", "Toys", "Gadgets"
];

const Categories = () => {
  return (
    <section className="py-14 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto text-center">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-4 border rounded hover:shadow-sm">
            <span className="text-gray-800 font-medium">{cat}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
