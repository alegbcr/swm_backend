const mysql = require('mysql2/promise');
const { config } = require('../../config/config');

let pool;

if (config.isProd) {
  URI = mysql.createPool(config.dbUrl); // URL de MySQL en prod
} else {
  pool = mysql.createPool({
    host: config.dbHost, // -> 'mysql'
    user: config.dbUser, // -> 'root'
    password: config.dbPassword, // -> 'admin123'
    database: config.dbName, // -> 'my_store'
    port: config.dbPort, // -> 3306
  });
}

module.exports = pool;
