var Vigenere = require('vigenere');

function encode(content,key){
    try{
        var result= "";
        result = Vigenere.encode(content,key);
        return result;
    }catch(err){
        console.error(err);
        return "encode failed";
    }
}

function decode(content,key){
    try{
        var result = "";
        result = Vigenere.decode(content,key);
        return result;
    }catch(err){
        console.error(err);
        return "decode failed"; 
    }
}

export{ encode,decode } 