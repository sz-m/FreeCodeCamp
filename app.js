var express = require('express');
var favicon = require('serve-favicon');
var jt = require('./jsonTime');

var app = express();

app.use(favicon(__dirname + '/favicon.ico'));

app.get('/:time', function(req, res){
  if(req.params.time)
    res.json(jt.jsonTime(req.params.time));
});

app.listen(8080);