/**
 * Calculator Unit Tests
 */
const Calculator = require('../../src/services/Calculator');

describe('Calculator Service - Unit Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('should add negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should throw error for invalid inputs', () => {
      expect(() => calculator.add('5', 3)).toThrow('Both arguments must be valid numbers');
      expect(() => calculator.add(5, NaN)).toThrow('Both arguments must be valid numbers');
    });
  });

  describe('subtract()', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(4, 10)).toBe(-6);
    });

    test('should throw error for invalid inputs', () => {
      expect(() => calculator.subtract('10', 4)).toThrow();
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(5, 4)).toBe(20);
    });

    test('should handle multiplication by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(calculator.multiply(-5, -4)).toBe(20);
      expect(calculator.multiply(-5, 4)).toBe(-20);
    });
  });

  describe('divide()', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(20, 4)).toBe(5);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('isEven()', () => {
    test('should return true for even numbers', () => {
      expect(calculator.isEven(4)).toBe(true);
      expect(calculator.isEven(0)).toBe(true);
      expect(calculator.isEven(-8)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(calculator.isEven(5)).toBe(false);
      expect(calculator.isEven(-7)).toBe(false);
    });

    test('should throw error for invalid input', () => {
      expect(() => calculator.isEven('4')).toThrow();
      expect(() => calculator.isEven(NaN)).toThrow();
    });
  });
});