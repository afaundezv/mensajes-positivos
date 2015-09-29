function validaMensaje(data){
    var m = data.message;
    var a = data.author;
    if(m.length > 250){
        m = m.substr(0,247);
        m = m + '...';
    }
    if(a.length > 100){
        a = a.substr(0,97);
        a = a + '...';
    }
    data.message = m;
    data.author  = a;
    return data;
}
function espaciosTexto(str){
    var patt = new RegExp(" ");
    return patt.test(str);
}

module.exports.validaMensaje = validaMensaje;
module.exports.espaciosTexto = espaciosTexto;