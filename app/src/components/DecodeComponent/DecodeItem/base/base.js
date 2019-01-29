function base64encode(content) {
    return Buffer.from(content).toString('base64');
}
function base64decode(content){
    return Buffer.from(content,'base64').toString();
}
function base32encode(content) {
    return "not finished";
}
function base32decode(content) {
    return "not finished";
}
function base16encode(content) {
    return "not finished";
}
function base16decode(content) {
    return "not finished";
}
function base36encode(content) {
    return "not finished";
}
function base36decode(content) {
    return "not finished";
}
function base58encode(content) {
    return "not finished";
}
function base58decode(content) {
    return "not finished";
}
function base62encode(content) {
    return "not finished";
}
function base62decode(content) {
    return "not finished";
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
    return result;
}
function baseDecode(content,type){
    if(!type){
        type = "base64";
    }
    var result = "";
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
    return result;
}

export {baseEncode, baseDecode}