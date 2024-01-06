// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CharityDetail from './CharityDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/charity/:id" element={<CharityDetail />} />
            </Routes>
        </Router>
    );
}

export default App;