/**
 * Server Entry Point
 */
const app = require('./src/app');
const config = require('./config/config');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Calculator API server running on port ${PORT}`);
  console.log(`📊 Environment: ${config.env}`);
  console.log(`🌐 Open http://localhost:${PORT} to view the app`);
});