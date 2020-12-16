const express = require('express');
const app = express();

// import all routes
const routes = require('./routes/aws.routes');

const port = 3000;

app.use(express.json());

// set endpoint to api/{valueFromRoutesFile}
app.use('/api', routes);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

module.exports = app;
