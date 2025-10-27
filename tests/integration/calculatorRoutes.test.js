/**
 * Calculator API Integration Tests
 */
const request = require('supertest');
const app = require('../../src/app');

describe('Calculator API - Integration Tests', () => {
  describe('POST /api/calculator/calculate', () => {
    test('should perform addition', async () => {
      const response = await request(app)
        .post('/api/calculator/calculate')
        .send({ operation: 'add', num1: 5, num2: 3 })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.result).toBe(8);
    });

    test('should perform division', async () => {
      const response = await request(app)
        .post('/api/calculator/calculate')
        .send({ operation: 'divide', num1: 10, num2: 2 })
        .expect(200);

      expect(response.body.result).toBe(5);
    });

    test('should return error for division by zero', async () => {
      const response = await request(app)
        .post('/api/calculator/calculate')
        .send({ operation: 'divide', num1: 10, num2: 0 })
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should return error for invalid operation', async () => {
      const response = await request(app)
        .post('/api/calculator/calculate')
        .send({ operation: 'invalid', num1: 5, num2: 3 })
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/calculator/check-even', () => {
    test('should identify even number', async () => {
      const response = await request(app)
        .post('/api/calculator/check-even')
        .send({ num: 4 })
        .expect(200);

      expect(response.body.isEven).toBe(true);
      expect(response.body.type).toBe('even');
    });

    test('should identify odd number', async () => {
      const response = await request(app)
        .post('/api/calculator/check-even')
        .send({ num: 5 })
        .expect(200);

      expect(response.body.isEven).toBe(false);
      expect(response.body.type).toBe('odd');
    });
  });

  describe('GET /api/health', () => {
    test('should return health status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
      expect(response.body.timestamp).toBeDefined();
    });
  });
});