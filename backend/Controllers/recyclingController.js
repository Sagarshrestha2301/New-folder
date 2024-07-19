const RecyclingForm = require('../models/recyclingModel');

exports.submitRecyclingForm = async (req, res) => {
  try {
    const newForm = new RecyclingForm(req.body);
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', form: newForm });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting form', error: error.message });
  }
};