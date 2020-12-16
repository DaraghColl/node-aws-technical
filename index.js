const express = require('express');
const app = express();
const path = require('path');

// import all routes
const routes = require('./routes/aws.routes');

const port = 3000;

app.use(express.json());

// set endpoint to api/{valueFromRoutesFile}
app.use('/api', routes);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

module.exports = app;
