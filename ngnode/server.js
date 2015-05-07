var express = require('express');
var app = new express();

app.use(express.static('web'));

var port = 9090;
app.listen(port);
console.log('server running at port - ' + port);