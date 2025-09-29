const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { config } = require('../config/config');

// Inicio del proyecto
const app = express();

app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

// routing
routerApi(app);

// middleware
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// app Listener to development
app.listen(process.env.PORT, () => {
  console.log(`The enviroment is ${config.env} ${config.isProd}`);
  console.log(`Server is running on http://localhost:${config.port}`);
});

// trabajo en produccion en vercel
module.exports = app;
