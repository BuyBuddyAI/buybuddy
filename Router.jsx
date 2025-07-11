import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Products from './src/pages/Products';
import SearchResults from './src/pages/SearchResults';
import Layout from './src/components/Layout';
import DashboardLayout from './src/pages/dashboard/DashboardLayout';
import DashboardHome from './src/pages/dashboard/DashboardHome';
import Orders from './src/pages/dashboard/Orders';
import Wishlist from './src/pages/dashboard/Wishlist';
import Settings from './src/pages/dashboard/Settings';
import Profile from './src/pages/dashboard/Profile';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Routes (without Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Main App Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
