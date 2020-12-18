# Node JS AWS App

## Installation

Use [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## AWS Credentials - shared credntials

```bash
~/.aws/credentials
```

## Folder Structure & Files

### API

- index.js - entry point, express setup (routes, static files)

- routes/aws.routes.js: endpoints setup - calls controller functions

- controllers/aws.controller.js: return the data to the endpoints - calls service for aws data

- services/aws.service.js: makes requests to aws using sdk to get data

### Tests

- tests/aws.service.spec.js: node service functions tests - mocks aws sdk and tests return values

- cypress/integration/ui/aws.spec.js: cypress UI tests

- cypress/integration/api/aws.spec.js: cypress API tests (test that asserts data returned may be specific to aws free tier data returned )

### UI

- public/index.html: displays list of regions
- public/app.js: fetches data from API & binds to DOM
- public/style.css: app styling

### Issues

##### Could not find vpc endpoint with 'Region' param - only VPCS by VPC ID.
