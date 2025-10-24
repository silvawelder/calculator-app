# Calculator Application

A well-structured Node.js calculator application with REST API, frontend interface, and comprehensive testing.

## Features

- ✅ RESTful API endpoints
- ✅ Clean architecture (MVC pattern)
- ✅ Unit and integration tests
- ✅ Frontend interface
- ✅ Error handling middleware
- ✅ Input validation

## Technologies

- Node.js
- Express.js
- Jest (Testing)
- Supertest (API Testing)

## Project Structure

```
calculator-app/
├── src/
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   └── app.js         # Express app setup
├── tests/
│   ├── unit/          # Unit tests
│   └── integration/   # Integration tests
├── public/            # Static files
├── config/            # Configuration
└── server.js          # Entry point
```

## Installation
```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## Docker Instalation

### Build Image
```
docker build -t calculator-app .  
```

## Running Tests
```bash
# Run all tests with coverage
npm test

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration

# Run tests in watch mode
npm run test:watch
```

## API Endpoints

### Calculate

```
POST /api/calculator/calculate
Content-Type: application/json
{
"operation": "add",
"num1": 5,
"num2": 3
}
```
### Check Even/Odd

```
POST /api/calculator/check-even
Content-Type: application/json
{
"num": 4
}
```

### Health Check

```
GET /api/health
```

## Usage

1. Start the server: `npm start`
2. Open browser: `http://localhost:3000`
3. Use the web interface or make API calls

## Testing

The application includes:
- **Unit Tests**: Test individual functions in isolation
- **Integration Tests**: Test API endpoints end-to-end
- **Coverage Report**: View in `coverage/` folder after running tests



