const express = require('express');
const router = express.Router();
const { submitRecyclingForm } = require('../controllers/recyclingController');

router.post('/submit', submitRecyclingForm);

module.exports = router;