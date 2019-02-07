function escapeEncode(content){
    try{
        return escape(content);
    }catch(err){
        return err;
    }
}
function escapeDecode(content){
    try{
        return unescape(content);
    }catch(err){
        return err;
    }
}

export {escapeEncode, escapeDecode}