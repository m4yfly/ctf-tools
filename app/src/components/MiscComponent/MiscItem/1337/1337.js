const l33t = require('1337');

function leetEncode(content) {
    try{
        return l33t(content);
    }catch(err){
        return err;
    }
}

export {leetEncode}