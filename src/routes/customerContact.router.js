const express = require('express');
const registerController = require('../controllers/customerContact.controller');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createCustomerContactSchema,
  updateCustomerContactSchema,
  getCustomerContactSchema,
} = require('../schemas/customerContact.schema');

const router = express.Router();

router.get('/', registerController.getInfoRegister);
router.get(
  '/:id',
  validatorHandler(getCustomerContactSchema, 'params'),
  registerController.getInfoRegisterById
);
router.post(
  '/',
  validatorHandler(createCustomerContactSchema, 'body'),
  registerController.registerCustomerInfo
);
router.patch(
  '/:id',
  validatorHandler(getCustomerContactSchema),
  validatorHandler(updateCustomerContactSchema, 'body'),
  registerController.updateInfoRegister
);
router.delete(
  '/:id',
  validatorHandler(getCustomerContactSchema, 'params'),
  registerController.deleteInfoRegister
);

module.exports = router;
