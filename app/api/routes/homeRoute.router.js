const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the HTML form
router.get('/', (req, res) => {
  // CORRECCIÓN: Retrocede dos niveles (../) para salir de 'routes/' y 'api/' y acceder a 'public/'
  res.sendFile(path.join(__dirname, '../../../public', 'index.html'));
});

module.exports = router;
