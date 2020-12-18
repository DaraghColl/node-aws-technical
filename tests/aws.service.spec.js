const awsService = require('../services/aws.service');

// test libs
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

describe('aws service', () => {
  // get regions
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
        // expect data returned from promise to equal mock data
        expect(data).to.eql(mockRegionsData.Regions);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get vpcs
  it('should get all vpcs', (done) => {
    // stub aws describe regions
    const describeVPCsStub = sinon.stub(awsService.ec2, 'describeVpcs');

    // mock regions
    const mockVPCsData = {
      status: 'success',
      Vpcs: [
        {
          CidrBlock: 'CidrBlock',
          DhcpOptionsId: 'dopt-*****',
          State: 'available',
          VpcId: 'vpc-*******',
          OwnerId: '1234556',
          InstanceTenancy: 'default',
          Ipv6CidrBlockAssociationSet: [],
          CidrBlockAssociationSet: [
            {
              AssociationId: 'vpc-cidr-assoc-*******',
              CidrBlock: '*******',
              CidrBlockState: {
                State: 'associated',
              },
            },
          ],
          IsDefault: true,
          Tags: [],
        },
      ],
    };

    describeVPCsStub.yields(null, mockVPCsData);

    // call get all regions & expect return data to equal mock
    awsService
      .getAllVPCs()
      .then((data) => {
        // expect data returned from promise to equal mock data
        expect(data).to.eql(mockVPCsData.Vpcs);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get subnets
  it('should get all Subnets by vpc id', (done) => {
    // stub aws describe regions
    const describeSubnetsStub = sinon.stub(awsService.ec2, 'describeSubnets');

    // mock regions
    const mockSubnetsData = {
      status: 'success',
      Subnets: [
        {
          AvailabilityZone: 'eu-west-1c',
          AvailabilityZoneId: 'euw1-az1',
          AvailableIpAddressCount: 4091,
          CidrBlock: '*******',
          DefaultForAz: true,
          MapPublicIpOnLaunch: true,
          MapCustomerOwnedIpOnLaunch: false,
          State: 'available',
          SubnetId: 'subnet-******',
          VpcId: 'vpc-******',
          OwnerId: '*********',
          AssignIpv6AddressOnCreation: false,
          Ipv6CidrBlockAssociationSet: [],
          Tags: [],
          SubnetArn: '*************',
        },
      ],
    };

    const mockVPCID = 'vpc-********';

    describeSubnetsStub.yields(null, mockSubnetsData);

    // call get all regions & expect return data to equal mock
    awsService
      .getAllSubnetsByVPC(mockVPCID)
      .then((data) => {
        // expect data returned from promise to equal mock data
        expect(data).to.eql(mockSubnetsData.Subnets);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
