const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the HTML form
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'form', 'form.html'));
});

module.exports = router;
