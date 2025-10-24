/**
 * Application Configuration
 */
module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  }
};