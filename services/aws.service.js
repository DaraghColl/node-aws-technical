const aws = require('aws-sdk');
// *** region not being picked up from credentials file
aws.config.update({ region: 'eu-west-1' });
const ec2 = new aws.EC2({ apiVersion: '2016-11-15' });

// get all regions from aws
exports.getAllRegions = () => {
  return new Promise((resolve, reject) => {
    ec2.describeRegions({}, (err, data) => {
      if (data) {
        resolve(data.Regions);
      } else if (err) {
        reject(err);
      }
    });
  });
};
