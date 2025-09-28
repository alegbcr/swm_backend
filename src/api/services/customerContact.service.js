const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class customerContactService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.CustomerContact.create(data);
    return newCustomer;
  }

  async find() {
    const allUsers = await models.CustomerContact.findAll();
    return allUsers;
  }

  async findOne(id) {
    const userById = await models.CustomerContact.findByPk(id);
    if (!userById) {
      throw boom.notFound('User not found');
    }
    return userById;
  }

  async update(id, changes) {
    const customerContact = await this.findOne(id);
    const userUpdated = await customerContact.update(changes);
    return userUpdated;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = customerContactService;
