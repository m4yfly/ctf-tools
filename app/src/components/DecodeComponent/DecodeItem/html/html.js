var entities = require("entities");

function htmlEncode(content){
    try{
        return entities.encodeHTML(content);
    }catch(err){
        return err;
    }
}
function htmlDecode(content){
    try{
        return entities.decodeHTML(content);
    }catch(err){
        return err;
    }
}

export {htmlEncode, htmlDecode}