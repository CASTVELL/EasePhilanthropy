// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'; // Renamed to match the casing

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);