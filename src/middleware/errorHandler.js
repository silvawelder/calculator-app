/**
 * Calculator Routes
 * API endpoint definitions
 */
const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// POST /api/calculator/calculate
router.post('/calculate', (req, res, next) => {
  calculatorController.calculate(req, res, next);
});

// POST /api/calculator/check-even
router.post('/check-even', (req, res, next) => {
  calculatorController.checkEven(req, res, next);
});

module.exports = router;