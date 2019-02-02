var express = require('express');
var mysql = require ('mysql');
var server = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'negocios',
    database : 'negocios'
  });

  console.log("Conectado a la DB");

server.get('/',function(req, res){

    res.send("HOLA MUNDO"); 
});

server.get('/login', function (req, res){
    
    res.send("HOLA DESDE LOGIN");
});

server.listen(3000);

//Toda invocacióna una función es asincrona