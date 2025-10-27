/**
 * Calculator Controller
 * Handles HTTP requests and responses
 */
const Calculator = require('../services/Calculator');

class CalculatorController {
  constructor() {
    this.calculator = new Calculator();
  }

  /**
   * Handle basic operations (add, subtract, multiply, divide)
   */
  calculate(req, res, next) {
    try {
      const { operation, num1, num2 } = req.body;

      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid numbers provided'
        });
      }

      let result;
      switch (operation) {
        case 'add':
          result = this.calculator.add(a, b);
          break;
        case 'subtract':
          result = this.calculator.subtract(a, b);
          break;
        case 'multiply':
          result = this.calculator.multiply(a, b);
          break;
        case 'divide':
          result = this.calculator.divide(a, b);
          break;
        default:
          return res.status(400).json({
            success: false,
            error: 'Invalid operation'
          });
      }

      res.json({
        success: true,
        operation,
        operands: { num1: a, num2: b },
        result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Check if a number is even
   */
  checkEven(req, res, next) {
    try {
      const { num } = req.body;
      const number = parseFloat(num);

      if (isNaN(number)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid number provided'
        });
      }

      const isEven = this.calculator.isEven(number);

      res.json({
        success: true,
        number,
        isEven,
        type: isEven ? 'even' : 'odd'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CalculatorController();