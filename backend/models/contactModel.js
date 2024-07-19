
const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

// Export the model

module.exports = mongoose.model('Contact', contactSchema);
