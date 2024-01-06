// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';

const root = document.getElementById('root');
createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);