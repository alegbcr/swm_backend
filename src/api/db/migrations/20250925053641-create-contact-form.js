'use strict';
const {
  CustomerContactSchema,
  CUSTOMER_CONTACT_TABLE,
} = require('../models/customerContact.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      CUSTOMER_CONTACT_TABLE,
      CustomerContactSchema
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_CONTACT_TABLE);
  },
};
