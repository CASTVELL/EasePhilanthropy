// components/CharityDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CharityDetail() {
    const { id } = useParams();
    const [charity, setCharity] = useState(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        axios.get(`http://localhost:3001/charities/${id}`)
            .then(response => {
                setCharity(response.data);
            });
    }, [id]);

    if (!charity) return null;

    return (
        <div>
            <h1>{charity.name}</h1>
            <p>{charity.description}</p>
            <p>Rate: {charity.rate}</p>
        </div>
    );
}

export default CharityDetail;