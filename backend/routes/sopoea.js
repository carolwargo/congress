const express = require('express');
const router = express.Router();
const Sopoea = require('../models/Sopoea');

// Get all SOPOEA data
router.get('/', async (req, res) => {
  try {
    const data = await Sopoea.find().sort({ year: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed initial data (run once manually or via script)
router.post('/seed', async (req, res) => {
  const seedData = [
    { year: 2010, amount: 422.0 },
    { year: 2011, amount: 422.0 },
    { year: 2012, amount: 422.0 },
    { year: 2013, amount: 390.0 },
    { year: 2014, amount: 390.0 },
    { year: 2015, amount: 390.0 },
    { year: 2016, amount: 390.0 },
    { year: 2017, amount: 390.0 },
    { year: 2018, amount: 424.0 },
    { year: 2019, amount: 429.0 },
    { year: 2020, amount: 449.0 },
    { year: 2021, amount: 461.0 },
    { year: 2022, amount: 486.3 },
    { year: 2023, amount: 512.0 },
    { year: 2024, amount: 552.6 },
    { year: 2025, amount: 571.8, isRequested: true },
  ];
  try {
    await Sopoea.deleteMany({});
    await Sopoea.insertMany(seedData);
    res.status(201).json({ message: 'Data seeded' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;