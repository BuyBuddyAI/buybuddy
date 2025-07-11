import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import {
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/dashboard', icon: HomeIcon },
    { name: 'Orders', path: '/dashboard/orders', icon: ShoppingBagIcon },
    { name: 'Wishlist', path: '/dashboard/wishlist', icon: HeartIcon },
    { name: 'Settings', path: '/dashboard/settings', icon: Cog6ToothIcon },
    { name: 'Profile', path: '/dashboard/profile', icon: UserCircleIcon }
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md w-64 space-y-6 py-6 px-4 fixed top-0 left-0 h-full z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
        
        <div className="text-2xl font-bold text-blue-600 mb-6 px-2">
  BuyBuddy 🛍️
  <NavLink
    to="/"
    className="block mt-2 text-sm text-blue-500 hover:underline"
  >
    ← Back to Home
  </NavLink>
</div>

        <nav className="flex flex-col space-y-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-50 transition ${
                  isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
                }`
              }
            >
              <link.icon className="h-5 w-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-6 w-full">
        {/* Mobile Toggle Button */}
        <div className="md:hidden flex justify-end mb-4">
        
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 p-2 rounded hover:bg-gray-200"
          >
            {sidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
