const punycode = require('punycode');

function pyencode(content){
    try{
        return punycode.encode(content);
    }catch(err){
        return err;
    }
}

function pydecode(content){
    try{
        return punycode.decode(content);
    }catch(err){
        return err;
    }
}

export {pyencode,pydecode}