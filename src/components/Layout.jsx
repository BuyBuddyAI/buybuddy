import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ChatAssistant from "../components/ChatAssistant";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("buybuddy_user"); // Or whatever key you're using
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 relative">
      <header className="bg-white shadow-md p-4 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">BuyBuddy 🛒</h1>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-grow max-w-xl w-full bg-gray-100 rounded-md overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-full px-4 py-2 outline-none bg-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 hover:bg-blue-700"
          >
            🔍
          </button>
        </form>

        {/* Nav + Profile */}
        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          <nav className="hidden md:flex space-x-4 text-sm md:text-base">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/products" className="hover:text-blue-500">Products</Link>
          </nav>

          {/* Avatar */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90"
            title="Account"
          >
            <span className="text-lg font-bold">A</span>
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 top-14 bg-white shadow-lg rounded-md border w-48 z-50">
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link to="/dashboard/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
              <Link to="/dashboard/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
              <Link to="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <hr />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BuyBuddy. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
