const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
  console.error(err); // opcional: loguear errores
  next(err);
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err); // ya se envió una respuesta, no hacer nada
  }
  res.status(500).json({ message: err.message, stack: err.stack });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload); // usar return y NO llamar next()
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res
      .status(409)
      .json({ statusCode: 409, message: err.name, stack: err.stack }); // usar return y NO llamar next()
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
