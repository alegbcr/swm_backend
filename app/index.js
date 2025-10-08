const express = require('express');
const cors = require('cors');
const path = require('path');
const routerApi = require('./api/routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./api/middlewares/error.handler');
const { config } = require('./config/config');

// Inicio del proyecto
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const whitelist = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://162.240.179.241:3000',
  'https://stratawealthmanagement.com',
  'https://www.stratawealthmanagement.com',
  'https://vps.stratawealthmanagement.com',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      console.log('❌ Bloqueado por CORS:', origin);
      callback(new Error('No permitido'));
    }
  },
  credentials: true, // si usas cookies o auth
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Activar CORS global
app.use(cors(options));
// Habilitar preflight requests para todas las rutas
app.options('*', cors(options));

// routing
routerApi(app);

// middleware
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// app Listener to development
app.listen(config.nodePort, () => {
  console.log(`The enviroment is ${config.env} ${config.isProd}`);
  console.log(`Server is running on http://localhost:${config.nodePort}`);
});

// trabajo en produccion en vercel
// module.exports = app;
