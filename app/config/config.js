require('dotenv').config();

const config = {
  // Node Variables
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  nodePort: process.env.NODE_PORT || 3000,
  // MySQL Variables
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUrl: process.env.DB_URL,
};

module.exports = { config };
