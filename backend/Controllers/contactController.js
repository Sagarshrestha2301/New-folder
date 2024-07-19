const ContactForm = require('../models/contactModel');

exports.submitContactForm = async (req, res) => {
  try {
    const newContact = new ContactForm(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting contact form', error: error.message });
  }
};