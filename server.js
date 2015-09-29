var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    http = require('http'),
    logic = require('./my_modules/logic/MensajeLogic.js');

//mongoose.connect('mongodb://localhost:27017/mensajes-positivos');

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

var url = '127.0.0.1:27017/' + process.env.OPENSHIFT_APP_NAME;

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
    url = process.env.OPENSHIFT_MONGODB_DB_URL +
    process.env.OPENSHIFT_APP_NAME;
}

// Connect to mongodb
var connect = function () {
    mongoose.connect(url);
};
connect();

var db = mongoose.connection;

db.on('error', function(error){
    console.log("Error loading the db - "+ error);
});

db.on('disconnected', connect);

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'','index.html'));
});

app.get('/api/getMessage', function(req, res) {
   logic.MessageLogic.getRandomMessage(res);
});

app.post('/api/addMessage', function(req, res) { 
    logic.MessageLogic.createMessage(req.body, res);
});

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
    server();
});
//app.listen(80);