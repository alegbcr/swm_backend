const { Sequelize } = require('sequelize');
const { config } = require('../../config/config');
const setupModels = require('../db/models/index');

const sequelize = config.isProd
  ? // Producción → MySQL real
    (sequelize = new Sequelize(config.url, {
      dialect: 'mysql',
      dialectOptions: {
        ssl: { rejectUnauthorized: false },
      },
      logging: false,
    }))
  : // Desarrollo → DB en memoria para no depender de MySQL real
    (sequelize = new Sequelize('sqlite::memory:', { logging: false }));

setupModels(sequelize);

module.exports = sequelize;
