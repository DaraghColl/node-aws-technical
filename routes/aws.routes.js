const express = require('express');
const router = express.Router();

// controller
const awsController = require('../controllers/aws.controller');

// api/regions
router.get('/regions', awsController.getAllRegions);

// api/vpcs
router.get('/vpcs', awsController.getAllVPCs);

// api/subnets
router.get('/subnets', awsController.getAllSubnets);

// api/vpcID
router.get('/subnetsByVPC/:vpc', awsController.getAllSubnetsByVPC);

module.exports = router;
