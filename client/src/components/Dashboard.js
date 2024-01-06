// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [charities, setCharities] = useState([]);
    const [rateFilter, setRateFilter] = useState([0, 5]);

    useEffect(() => {
        // Replace with your actual API endpoint
        axios.get('http://localhost:3001/charities')
            .then(response => {
                setCharities(response.data);
            });
    }, []);

    const filteredCharities = charities.filter(charity => charity.rate >= rateFilter[0] && charity.rate <= rateFilter[1]);

    return (
        <div>
            <input type="range" min="0" max="5" value={rateFilter[0]} onChange={e => setRateFilter([e.target.value, rateFilter[1]])} />
            <input type="range" min="0" max="5" value={rateFilter[1]} onChange={e => setRateFilter([rateFilter[0], e.target.value])} />
            <table>
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
    );
}

export default Dashboard;