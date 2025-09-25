const { Sequelize } = require('sequelize');
const { config } = require('../../config/config');
const setupModels = require('../db/models/index');

const sequelize = new Sequelize(config.dbUrl);

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
