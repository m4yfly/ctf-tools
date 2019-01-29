var base64 = require('js-base64').Base64;
var base32 = require('hi-base32');
var base36 = require('base36');
var base58 = require('base58');
var base62 = require('base62');
function base64encode(content) {
    return base64.encode(content);
}
function base64decode(content){
    return base64.decode(content);
}
function base32encode(content) {
    return base32.encode(content);
}
function base32decode(content) {
    return base32.decode(content);
}
function base16encode(content) {
    return Buffer.from(content).toString('hex');
}
function base16decode(content) {
    return Buffer.from(content,'hex').toString();
}
function base36encode(content) {
    console.log(content);
    return base36.base36encode(content);
}
function base36decode(content) {
    return base36.base36decode(content);
}
function base58encode(content) {
    return base58.int_to_base58(content);;
}
function base58decode(content) {
    return base58.base58_to_int(content);
}
function base62encode(content) {
    return base62.encode(content);
}
function base62decode(content) {
    return base62.decode(content);
}
function base91encode(content) {
    return "not finished";
}
function base91decode(content) {
    return "not finished";
}
function base92encode(content) {
    return "not finished";
}
function base92decode(content) {
    return "not finished";
}
function base85encode(content) {
    return "not finished";
}
function base85decode(content) {
    return "not finished";
}

// base64 base32 base16 base36 base58 base62 base91 base92 base85

function baseEncode(content,type){
    if(!type){
        type = "base64";
    }
    var result = "";
    try {
        switch(type)
        {
            case "base64":
                result =  base64encode(content);
                break;
            case "base32":
                result = base32encode(content);
                break;
            case "base16":
                result = base16encode(content);
                break;
            case "base36":
                result = base36encode(content);
                break;
            case "base58":
                result = base58encode(content);
                break;
            case "base62":
                result = base62encode(content);
                break;
            case "base91":
                result = base91encode(content);
                break;
            case "base92":
                result = base92encode(content);
                break;
            case "base85":
                result = base85encode(content);
                break;
        }
    }catch(err){
        console.error("base encode error");
        result = "base encode error";
    }
    return result;
}
function baseDecode(content,type){
    if(!type){
        type = "base64";
    }
    var result = "";
    try{
        switch(type)
        {
            case "base64":
                result =  base64decode(content);
                break;
            case "base32":
                result = base32decode(content);
                break;
            case "base16":
                result = base16decode(content);
                break;
            case "base36":
                result = base36decode(content);
                break;
            case "base58":
                result = base58decode(content);
                break;
            case "base62":
                result = base62decode(content);
                break;
            case "base91":
                result = base91decode(content);
                break;
            case "base92":
                result = base92decode(content);
                break;
            case "base85":
                result = base85decode(content);
                break;
        }
    }catch(err){
        console.log("base decode error");
        result = "base decode error";
    } 
    return result;
}

export {baseEncode, baseDecode}