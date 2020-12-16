const awsService = require('../services/aws.service');

// get all regions
exports.getAllRegions = (req, res) => {
  awsService
    .getAllRegions()
    .then((data) => res.status(200).json({ status: 'success', data: data }))
    .catch((err) => res.status(500).json({ status: 'error', error: err }));
};
