const awsService = require('../services/aws.service');

// get all regions
exports.getAllRegions = (req, res) => {
  awsService
    .getAllRegions()
    .then((data) => res.status(200).json({ status: 'success', data: data }))
    .catch((err) => res.status(500).json({ status: 'error', error: err }));
};

// get all vpcs
exports.getAllVPCs = (req, res) => {
  awsService
    .getAllVPCs()
    .then((data) => res.status(200).json({ status: 'success', data: data }))
    .catch((err) => res.status(500).json({ status: 'error', error: err }));
};

// get all subnets
exports.getAllSubnets = (req, res) => {
  awsService
    .getAllSubnets()
    .then((data) => res.status(200).json({ status: 'success', data: data }))
    .catch((err) => res.status(500).json({ status: 'error', error: err }));
};
