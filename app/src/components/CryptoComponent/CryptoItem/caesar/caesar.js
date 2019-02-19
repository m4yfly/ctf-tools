import { encrypt, decrypt } from 'caesar-shift';

function encode(content,shift){
    try{
        var result="";
        shift = parseInt(shift);
        result = encrypt(shift, content);
        return result;
    }catch(err){
        console.errer(err);
        return "encode failed";
    }
}

function decode(content,shift){
    try{
        var result= "";
        shift = parseInt(shift);
        result = decrypt(shift, content);
        return result;
    }catch(err){
        console.errer(err);
        return "decode failed";
    }
}

function decode_all(content){
    try{
        var result="";
        for(var shift=0;shift<26;shift++){
            result+=encrypt(shift,content)+'\n';
        }
        return result;
    }catch(err){
        console.error(err);
        return "decode failed";
    }
}

export {encode, decode, decode_all}