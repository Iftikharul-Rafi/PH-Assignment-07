import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // ← ইম্পোর্ট যোগ করো
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/PH-Assignment-07">   {/* ← basename সেট করো */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);