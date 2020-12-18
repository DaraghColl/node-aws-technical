const aws = require('aws-sdk');
// *** region not being picked up from credentials file
aws.config.update({ region: 'eu-west-1' });
const ec2 = new aws.EC2({ apiVersion: '2016-11-15' });

exports.ec2 = ec2;

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

// get all VPCs from aws
exports.getAllVPCs = () => {
  return new Promise((resolve, reject) => {
    ec2.describeVpcs({}, (err, data) => {
      if (data) {
        resolve(data.Vpcs);
      } else if (err) {
        reject(err);
      }
    });
  });
};

// get all subnets by vpc id
exports.getAllSubnetsByVPC = (vpcID) => {
  const params = {
    Filters: [
      {
        Name: 'vpc-id',
        Values: [vpcID],
      },
    ],
  };

  return new Promise((resolve, reject) => {
    ec2.describeSubnets(params, (err, data) => {
      if (data) {
        resolve(data.Subnets);
      } else if (err) {
        reject(err);
      }
    });
  });
};
