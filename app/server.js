const express = require('express');
const port = 8000;
var cors = require('cors');
const app = express();


// const requestF = function() {
//   var request = require("request");
//
//   var options = { method: 'GET',
//     url: 'https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv'};
//
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     // console.log(body);
//     return body
//   });
// }

// app.get('/', (req, res) => res.send(requestF()))

app.use(cors())

require('./routes')(app);

app.listen(port, () => {
  console.log("we are live on port" + port);
});
