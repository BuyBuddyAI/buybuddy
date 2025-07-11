import React, { useState } from 'react';

// Temporary local product list (can later come from API)
const dummyProducts = [
  'iPhone 14 Pro Max',
  'Samsung Galaxy S23 Ultra',
  'Sony Headphones',
  'Nike Running Shoes',
  'Adidas Hoodie',
  'Apple MacBook Air',
  'HP Pavilion Laptop',
  'Canon DSLR Camera',
  'Wooden Dining Table',
  'Philips Trimmer',
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter products
    if (value.trim() === '') {
      setResults([]);
    } else {
      const filtered = dummyProducts.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  const handleSelect = (value) => {
    setQuery(value);
    setResults([]);
    alert(`You searched for: ${value}`);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto my-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded-lg shadow-md z-10 max-h-60 overflow-y-auto">
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
