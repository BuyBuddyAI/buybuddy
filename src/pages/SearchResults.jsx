// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/productsData';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('q')?.toLowerCase() || '';

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h2>
      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded mb-2" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
