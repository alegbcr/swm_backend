const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the HTML form
router.get('/', (req, res) => {
  // CORRECCIÓN FINAL: Solo necesitamos retroceder dos niveles (../..) para salir de
  // 'routes/' y 'api/' y acceder a la carpeta 'public/' en la raíz.
  // path.join(__dirname, '..', '..') resuelve a: /home/.../node_backend_mysql/
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'form', 'form.html'));
});

module.exports = router;
