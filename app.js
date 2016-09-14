var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/whoami', function(req, res){
  var language = req.headers['accept-language'].split(',')[0];

  var userAgent = req.headers['user-agent'];
  var software = userAgent.substring(userAgent.indexOf('(')+1, userAgent.indexOf(')')).replace(';', ',');

  var result = {
    'ipaddress': req.ip,
    'language': language,
    'software': software
  };

  res.json(result);
});

app.listen(process.env.PORT || 8080);