const express = require('express');
const fetch = require('node-fetch');
const port = 8000;

const app = express();


const requestF = function() {
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv'};

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    // console.log(body);
    return body
  });
}

// app.get('/', (req, res) => res.send(requestF()))

require('./routes')(app);

app.listen(port, () => {
  console.log("we are live on port" + port);
});
