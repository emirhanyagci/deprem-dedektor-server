const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

router.get('/earthquakes', (req, res) => {
  const sampleData = [
    { id: 1, location: 'Istanbul', magnitude: 4.5, date: '2023-05-15' },
    { id: 2, location: 'Izmir', magnitude: 3.8, date: '2023-05-14' },
    { id: 3, location: 'Ankara', magnitude: 2.9, date: '2023-05-13' }
  ];

  res.json(sampleData);
});

module.exports = router;
