var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    logic = require('./my_modules/logic/MensajeLogic.js');

mongoose.connect('mongodb://localhost:27017/mensajes-positivos');

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'','index.html'));
});

app.get('/api/getMessage', function(req, res) {
   logic.MessageLogic.getMessage(res);
});

app.post('/api/addMessage', function(req, res) { 
    logic.MessageLogic.createMessage(req.body, res);
});

app.listen(80);