const express = require('express');
const router = express.Router();

// controller
const awsController = require('../controllers/aws.controller');

router.get('/regions', awsController.getAllRegions);

router.get('/vpcs', (req, res) => {
  res.json({ message: 'get all vpcs' });
});

router.get('/subnets', (req, res) => {
  res.json({ message: 'get all subnets' });
});

module.exports = router;
