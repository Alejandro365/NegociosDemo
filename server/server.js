var express = require('express');
var server = express();

server.get('/',function(req, res){

    res.send("HOLA MUNDO"); 

});

server.get('/login', function (req, res){

    res.send("HOLA DESDE LOGIN");
});

server.listen(3000);