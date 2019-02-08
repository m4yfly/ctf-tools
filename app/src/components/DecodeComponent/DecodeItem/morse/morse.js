var xmorse = require('xmorse');

var option = {
    space: ' ',
    long: '-',
    short: '.'
};
function morseEncode(content){
    try{
        return xmorse.encode(content,option);
    }catch(err){
        return err;
    }
}
function morseDecode(content){
    try{
        return xmorse.decode(content,option).toLowerCase();
    }catch(err){
        return err;
    }
}

export {morseEncode, morseDecode}