const mysql = require('mysql2/promise');
const { config } = require('../../../config/config');

let pool;

if (config.isProd) {
  URI = mysql.createPool(config.dbUrl); // URL de MySQL en prod
} else {
  pool = mysql.createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort,
  });
}

module.exports = pool;
