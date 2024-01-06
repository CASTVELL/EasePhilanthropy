// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const charities = [
    { id: 1, name: 'Charity 1', description: 'This is Charity 1', rate: 4 },
    { id: 2, name: 'Charity 2', description: 'This is Charity 2', rate: 3 },
    { id: 3, name: 'Charity 3', description: 'This is Charity 3', rate: 5 },
    // Add more charities as needed
];

app.get('/charities', (req, res) => {
    res.json(charities);
});

app.get('/charities/:id', (req, res) => {
    const charity = charities.find(c => c.id === parseInt(req.params.id));
    if (!charity) return res.status(404).send('The charity with the given ID was not found.');
    res.json(charity);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));