var xxencode = require('xxencode');

function encode(content){
    try{
        return xxencode.encode(content).toString();
    }catch(err){
        return err;
    }
}

function decode(content){
    try{
        return xxencode.decode(content).toString();
    }catch(err){
        return err;
    }
}

export {encode,decode}