import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import FilterSidebar from "../components/FilterSidebar";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [filters, setFilters] = useState({ category: "", sort: "" });

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      setAllProducts(data);
      setDisplayed(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];

    if (filters.category) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(filters.category)
      );
    }

    if (filters.sort === "low-high") {
      filtered.sort(
        (a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
      );
    } else if (filters.sort === "high-low") {
      filtered.sort(
        (a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""))
      );
    }

    setDisplayed(filtered);
  }, [filters, allProducts]);

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayed.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
