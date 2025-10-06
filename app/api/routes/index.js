const express = require('express');

const homeRoute = require('./homeRoute.router');
const contactForm = require('./contactForm.router');
const customerContact = require('./customerContact.router');

function routerApi(app) {
  const router = express.Router();
  // Web Site
  app.use('/', router);
  router.use('/', homeRoute);

  router.use('/form', contactForm);

  // API REST
  router.use('/api/v1/customer-contact', customerContact);
}

module.exports = routerApi;
