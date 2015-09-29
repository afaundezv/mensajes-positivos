var mongoose = require('mongoose'),
    random = require('mongoose-simple-random');

var schema = new mongoose.Schema({
    message: String,
    author: String,
    image: String
});
schema.plugin(random);
msj = mongoose.model('mensajes', schema);

module.exports.msj = msj;