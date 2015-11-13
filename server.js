var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(history());
app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
