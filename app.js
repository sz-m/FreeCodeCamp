var express = require('express');
var multer = require('multer');

var upload = multer();
var app = express();

app.use(express.static('public'));

app.post('/file-analysis', upload.single('file'), function(req, res){
  res.json({size: req.file.size});
});


app.listen(process.env.PORT || 8080);