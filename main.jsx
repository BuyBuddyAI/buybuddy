import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
