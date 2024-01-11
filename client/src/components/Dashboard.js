// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../componentsCSS/Dashboard.css';

function Dashboard() {
    const [charities, setCharities] = useState([]);
    const [rateFilter, setRateFilter] = useState([0, 5]);

    useEffect(() => {
        axios.get('http://localhost:3001/charities')
            .then(response => {
                setCharities(response.data);
            });
    }, []);

    const filteredCharities = charities.filter(charity => charity.rate >= rateFilter[0] && charity.rate <= rateFilter[1]);

    return (
        <div className="dashboard">
            <div className="filter-section">
                <label htmlFor="rate">Rate   ({rateFilter[0]})</label>
                <input id="rate" type="range" min="0" max="5" value={rateFilter[0]} onChange={e => setRateFilter([e.target.value, rateFilter[1]])} />
            </div>
            <div className="charities-section">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>LINK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCharities.map(charity => (
                            <tr key={charity.id}>
                                <td>{charity.name}</td>
                                <td>{charity.description}</td>
                                <td>{charity.rate}</td>
                                <td><Link to={`/charity/${charity.id}`}>Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;