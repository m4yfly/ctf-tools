var uuencode = require('./node-uuencode');

function encode(content){
    try{
        return uuencode.encode(content).toString();
    }catch(err){
        return err;
    }
}

function decode(content){
    try{
        return uuencode.decode(content).toString();
    }catch(err){
        return err;
    }
}

export {encode,decode}