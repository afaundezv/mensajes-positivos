var dao = require('../dao/MensajeDao.js');
var utils = require('../utils/utils.js');

var MessageLogic = {
    getRandomMessage : function (res){
        dao.methods.findOneRandom(res);
    },
    createMessage : function(data, res){
        data = utils.validaMensaje(data);
        utils.espaciosTexto(data.message) ? dao.methods.create(data, res) : res.send("i lov y");     
    }
};
module.exports.MessageLogic = MessageLogic;