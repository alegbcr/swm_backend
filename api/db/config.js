const { config } = require('../../config/config');

module.exports = {
  development: {
    url: config.dbUrl || 'sqlite::memory:',
    dialect: 'mysql',
  },
  production: {
    url: config.dbUrl,
    dialect: 'mysql',
  },
};
