var messageModel = require('../model/MensajeModel.js');

var methods = {
    findOneRandom : function (res){
        messageModel.msj.findOneRandom(function(err, result) {
            !err ? res.json(result) : res.send(err); 
        });
    },
    create : function(data, res){
        messageModel.msj.create({
            message: '"' + data.message + '"',
            author: data.author,
            image: data.image,
            done: false
        }, function(err, result){
            !err ? res.json(result) : res.send(err); 
        });
    }
};
module.exports.methods = methods;