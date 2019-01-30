function hexEncode(content,type) {
    var result="";
    try{
        result = new Buffer.from(content).toString('hex');
    }catch(err){
        console.error("hex encode error");
        result = "hex encode error";
    }
    return result;
}

function hexDecode(content,type) {
    var result="";
    try{
        result = new Buffer.from(content,'hex').toString('utf8');
    }catch(err){
        console.error("hex decode error");
        result = "hex decode error";
    }
    return result;
}

export {hexEncode, hexDecode}