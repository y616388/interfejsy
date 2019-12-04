var express = require('express');

var app = express();
var port = process.env.PORT || 5000
var server = app.listen(port, function() {
	console.log('start ' + port);
});

app.use(express.static('public'));