const { config } = require('../../config/config');

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost, // o 'localhost'
    dialect: config.dbHost,
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost, // dentro del contenedor
    dialect: config.dbHost,
  },
};
