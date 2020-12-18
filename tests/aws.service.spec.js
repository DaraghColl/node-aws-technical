const awsService = require('../services/aws.service');

// test libs
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

describe('aws service', () => {
  it('should get all regions', (done) => {
    // stub aws describe regions
    const describeRegionsStub = sinon.stub(awsService.ec2, 'describeRegions');

    // mock regions
    const mockRegionsData = {
      status: 'success',
      Regions: [
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

    describeRegionsStub.yields(null, mockRegionsData);

    // call get all regions & expect return data to equal mock
    awsService
      .getAllRegions()
      .then((data) => {
        expect(data).to.eql(mockRegionsData.Regions);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
