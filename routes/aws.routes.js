const express = require('express');
const router = express.Router();

router.get('/regions', (req, res) => {
  res.json({ message: 'get all regions' });
});

router.get('/vpcs', (req, res) => {
  res.json({ message: 'get all vpcs' });
});

router.get('/subnets', (req, res) => {
  res.json({ message: 'get all subnets' });
});

module.exports = router;
