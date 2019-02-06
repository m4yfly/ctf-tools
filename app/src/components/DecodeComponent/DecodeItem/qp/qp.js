var quotedPrintable = require('quoted-printable');
var utf8 = require('utf8');

function qpEncode(content){
    try{
        return quotedPrintable.encode(utf8.encode(content));
    }catch(err){
        return err;
    }
}
function qpDecode(content){
    try{
        return utf8.decode(quotedPrintable.decode(content));
    }catch(err){
        return err;
    }
}

export {qpEncode, qpDecode}