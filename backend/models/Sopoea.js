const mongoose = require('mongoose');

const sopoeaSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  amount: { type: Number, required: true }, // In millions
  isRequested: { type: Boolean, default: false },
});

module.exports = mongoose.model('Sopoea', sopoeaSchema);