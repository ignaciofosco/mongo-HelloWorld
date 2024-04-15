const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  message: { type: String, required: true },
  dateSent: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);