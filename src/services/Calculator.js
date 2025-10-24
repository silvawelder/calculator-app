/**
 * Calculator Service
 * Core business logic for mathematical operations
 */
class Calculator {
  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    this._validateNumbers(a, b);
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    this._validateNumbers(a, b);
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    this._validateNumbers(a, b);
    return a * b;
  }

  /**
   * Divide two numbers
   * @param {number} a - Numerator
   * @param {number} b - Denominator
   * @returns {number} Quotient of a and b
   */
  divide(a, b) {
    this._validateNumbers(a, b);
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  /**
   * Check if a number is even
   * @param {number} num - Number to check
   * @returns {boolean} True if even, false if odd
   */
  isEven(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Argument must be a valid number');
    }
    return num % 2 === 0;
  }

  /**
   * Private method to validate inputs
   * @private
   */
  _validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      throw new Error('Both arguments must be valid numbers');
    }
  }
}

module.exports = Calculator;