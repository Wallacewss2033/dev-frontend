import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/route';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <AppRoutes  />
  </React.StrictMode>
);