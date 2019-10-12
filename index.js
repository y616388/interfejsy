var express = require('express');
//var socket = require('socket.io');

//setup
var app = express();
var port = process.env.PORT || 5000
var server = app.listen(port, function() {
	console.log('start ' + port);
});


//pliki
app.use(express.static('public'));
/*
var io = socket(server);

//polaczenie
io.on('connection', function(socket) {
	console.log('made socket connection', socket.id);

	//zapytanie
	socket.on('msg', function(data) {
		io.sockets.emit('msg', data);
	});
});
*/
