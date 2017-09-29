// Require express
var express = require('express');
// Instance
var app = express();

app.get('/', function(req, res){
	res.send('Hi');
});

app.listen(8001, function() {
	console.log('Listening at port 8001');
})
