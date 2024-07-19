const mongoose = require('mongoose');

const recyclingFormSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  alternateNo: String,
  type: {
    type: String,
    enum: ['Donate', 'Sell', 'Sell and Donate'],
    default: 'Donate'
  }
}, { timestamps: true });

module.exports = mongoose.model('RecyclingForm', recyclingFormSchema);