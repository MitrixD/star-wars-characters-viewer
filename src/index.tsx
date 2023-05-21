import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/tailwind.css';
import App from './app';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
