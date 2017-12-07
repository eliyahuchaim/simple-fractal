const fetch = require('node-fetch');
var request = require("request");

module.exports = function(app) {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




  app.get('/companies', (req, res, next) => {

    var options = { method: 'GET',
      url: 'https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv'};
      request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.stringify(body));
    });
  })

  app.get('/engineers', (req, res, next) => {

    var options = { method: 'GET',
      url: 'https://s3.amazonaws.com/simple-fractal-recruiting/score-records.csv'};
      request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.stringify(body));
    });
  })


};
