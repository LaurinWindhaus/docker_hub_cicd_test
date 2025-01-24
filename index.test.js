const request = require('supertest');
const app = require('./index');

describe('GET /calc', () => {
  it('should return the sum of two numbers', async () => {
    const response = await request(app).get('/calc?num1=10&num2=20');
    expect(response.status).toBe(200);
    expect(response.text).toBe('The sum of 10 and 20 is: 30');
  });

  it('should return an error for invalid input', async () => {
    const response = await request(app).get('/calc?num1=ten&num2=20');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid input. Please provide valid numbers.');
  });
});
