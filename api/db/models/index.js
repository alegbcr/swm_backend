const {
  CustomerContact,
  CustomerContactSchema,
} = require('./customerContact.model');

function setupModels(sequelize) {
  CustomerContact.init(
    CustomerContactSchema,
    CustomerContact.config(sequelize)
  );
}

module.exports = setupModels;
