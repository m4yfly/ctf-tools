var Vigenere = require('vigenere');

function encode(content,key){
    var result= "";
    result = Vigenere.encode(content,key);
    return result;
}

function decode(content,key){
    var result = "";
    result = Vigenere.decode(content,key);
    return result;
}

export{ encode,decode } 