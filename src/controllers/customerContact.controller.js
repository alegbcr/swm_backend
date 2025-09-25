const customerContactService = require('../services/customerContact.service');
const {
  createCustomerContactSchema,
  updateCustomerContactSchema,
  getCustomerContactSchema,
} = require('../schemas/customerContact.schema');

const service = new customerContactService();

exports.getInfoRegister = async (req, res) => {
  try {
    const infoRegistered = await service.find();
    res.status(200).json(infoRegistered);
  } catch (err) {
    console.error('Error handling user data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getInfoRegisterById = async (req, res) => {
  try {
    const { id } = req.params;
    const infoRegistered = await service.findOne(id);
    res.status(200).json(infoRegistered);
  } catch (err) {
    console.error('Error handling user data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.registerCustomerInfo = async (req, res) => {
  try {
    const customer = await service.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    console.error('Error saving customer data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateInfoRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await service.update(id, req.body);
    res.status(200).json(customer);
  } catch (err) {
    console.error('Error updating customer data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteInfoRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await service.delete(id);
    res.status(200).json(customer);
  } catch (err) {
    console.error('Error deleting customer:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
