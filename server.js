var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('bodyParser');
var app = express();

var STANDINFO_FILE = path.join(__dirname, 'standinfo.json');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/standinfo', function(req, res){
 fs.readFile(STANDINFO_FILE, function(err, data){
  res.setHeader('Cache-Control', 'no-cache');
  res.json(JSON.parse(data));
 });
});

app.post('/api/standinfo', function(req, res){
 fs.readFile(GROCERYLIST_FILE, function(err, data){
  var standinfo = JSON.parse(data);
  standinfo.push(req.body);
  fs.writeFile(STANDINFO_FILE, JSON.stringify(standinfo, null, 4), function(err){
   res.setHeader('Cache-Control', 'no-cache');
   res.json(standinfo);
  });
 });
});

app.listen(app.get('port'), function(){
 console.log('Server started: localhost:' + app.get('port') + '/');
});
