const express = require('express');

const formRoute = require('./contactForm.router');
const customerContact = require('./customerContact.router');

function routerApi(app) {
  const router = express.Router();

  // Web Site
  app.use('/', router);
  router.use('/contact-form', formRoute);

  // API REST
  router.use('/api/customer-contact', customerContact);
}

module.exports = routerApi;
