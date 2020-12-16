const express = require('express');
const router = express.Router();

router.get('/regions', (req, res) => {
  res.json({ message: 'get all regions' });
});

module.exports = router;
