import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';

// Temporary mock products
const mockProducts = [
  { name: 'iPhone 14 Pro Max', brand: 'Apple', category: 'Mobiles', img: 'https://source.unsplash.com/200x200/?iphone' },
  { name: 'Galaxy S23 Ultra', brand: 'Samsung', category: 'Mobiles', img: 'https://source.unsplash.com/200x200/?samsung' },
  { name: 'MacBook Air M2', brand: 'Apple', category: 'Electronics', img: 'https://source.unsplash.com/200x200/?macbook' },
  { name: 'Nike Air Max', brand: 'Nike', category: 'Fashion', img: 'https://source.unsplash.com/200x200/?nike,shoes' },
  { name: 'Sony WH-1000XM5', brand: 'Sony', category: 'Electronics', img: 'https://source.unsplash.com/200x200/?sony,headphones' },
  { name: 'Adidas Hoodie', brand: 'Adidas', category: 'Fashion', img: 'https://source.unsplash.com/200x200/?adidas,hoodie' },
  { name: 'Dining Table Set', brand: 'Home Style', category: 'Home & Kitchen', img: 'https://source.unsplash.com/200x200/?furniture,dining' },
  { name: 'Canon DSLR 90D', brand: 'Canon', category: 'Electronics', img: 'https://source.unsplash.com/200x200/?camera,canon' },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(mockProducts);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredItems(mockProducts);
    } else {
      const filtered = mockProducts.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.brand.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🖼️ Slider */}
      <HeroSlider />

      {/* 🔍 Search Bar */}
      <section className="max-w-3xl mx-auto mt-6 px-4">
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-grow px-5 py-3 outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            className="bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700 transition"
            onClick={() => alert(`Searching for: ${searchTerm}`)}
          >
            🔍 Search
          </button>
        </div>
      </section>

      {/* 🚀 Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-md shadow-md mb-10 mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to BuyBuddy 🛍️</h2>
          <p className="text-lg">Your ultimate smart shopping companion – Discover the best deals and personalized recommendations just for you.</p>
          <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 shadow transition">
            Start Shopping
          </button>
        </div>
      </section>

      {/* 🌟 Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Smart Recommendations', icon: '🤖', desc: 'Get AI-powered product suggestions tailored to your needs.' },
          { title: 'Best Deals Alerts', icon: '💸', desc: 'Never miss a discount – we track and notify the best deals.' },
          { title: 'Compare & Save', icon: '📊', desc: 'Compare prices across platforms like Amazon & Flipkart instantly.' },
        ].map((feature, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 📦 Search Results or Categories */}
      <section className="max-w-6xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold mb-6">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Explore Categories'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow hover:scale-105 transform transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="text-center font-semibold">{item.name}</h4>
                <p className="text-sm text-center text-gray-500">{item.brand} • {item.category}</p>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              No results found for "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      {/* 🎉 Promo Banner */}
      <section className="bg-yellow-100 p-6 text-center rounded-lg shadow max-w-6xl mx-auto mb-16">
        <h4 className="text-xl font-bold mb-2">🎉 Launch Offer!</h4>
        <p>Sign up now and get exclusive early access to our AI Assistant & shopping features.</p>
      </section>
    </div>
  );
};

export default Home;
