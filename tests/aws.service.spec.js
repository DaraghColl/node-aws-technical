const awsService = require('../services/aws.service');
const aws = require('aws-sdk');

// test libs
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

describe('aws service', (done) => {
  it('should get all regions', () => {
    const ec2 = new aws.EC2({});
    const getRegionsStub = sinon.stub(awsService.ec2, 'describeRegions');

    const mockRegionsData = {
      status: 'success',
      data: [
        {
          Endpoint: 'ec2.eu-north-1.amazonaws.com',
          RegionName: 'eu-north-1',
          OptInStatus: 'opt-in-not-required',
        },
        {
          Endpoint: 'ec2.ap-south-1.amazonaws.com',
          RegionName: 'ap-south-1',
          OptInStatus: 'opt-in-not-required',
        },
      ],
    };

    getRegionsStub.yields(mockRegionsData);

    awsService.getAllRegions();

    expect(getRegionsStub.called);
  });
});
