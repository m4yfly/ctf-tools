var base64 = require('js-base64').Base64;
var base32 = require('hi-base32');
var base36 = require('base36');
var base58 = require('base58');
var base62 = require('base62');
var base91 = require('./base91');
var base85_dic = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~';
var base85 = require('base-x')(base85_dic);

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
    return base91.encode(content);
}
function base91decode(content) {
    return base91.decode(content);
}
function base92encode(content) {
    if(content==""){
        return '~';
    }
    var bitstr = '';
    var bitfirst = '';
    while(bitstr.length < 13 && content){
        bitfirst = parseInt(content[0].charCodeAt()).toString(2);
        if(bitfirst.length < 8){
            bitfirst = Array(8-bitfirst.length+1).join('0') + bitfirst;
        }else if (bitfirst > 8){
            throw 'error occured in base92encode';
        }
        bitstr += bitfirst;
        content = content.substr(1)
    }
    var resstr = '';
    while(bitstr.length > 13 || bitstr) {
        var i = parseInt(bitstr.substr(0,13),2);
        resstr += base92_chr(parseInt(i / 91));
        resstr += base92_chr(i % 91);
        bitstr = bitstr.substr(13)
        while(bitstr.length < 13 && content){
            bitfirst = parseInt(content[0].charCodeAt()).toString(2);
            if(bitfirst.length < 8){
                bitfirst = Array(8-bitfirst.length+1).join('0') + bitfirst;
            }else if (bitfirst > 8){
                throw 'error occured in base92encode';
            }
            bitstr += bitfirst;
            content = content.substr(1);
        }
    }
    if(bitstr){
        if(bitstr.length < 7){
            bitstr += Array(6 - bitstr.length + 1).join('0');
            resstr += base92_chr(parseInt(bitstr,2));
        }
        else{
            bitstr += Array(13 - bitstr.length + 1).join('0');
            var i = parseInt(bitstr,2);
            resstr += base92_chr(parseInt(i / 91));
            resstr += base92_chr(i % 91);
        }
    }
    return resstr;
}
function base92decode(content) {
    return "not finished";
}
function base85encode(content) {
    var message = Buffer.from(content);
    return base85.encode(message);
}
function base85decode(content) {
    return base85.decode(content);
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