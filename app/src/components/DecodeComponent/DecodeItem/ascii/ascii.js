var Iconv  = require('iconv').Iconv;

var ascii = {};

ascii.utf_16 = {}
ascii.utf_32 = {}
ascii.unicode = {}
ascii.hex = {}

ascii.utf_16.encode = function(content){
    try{
        var iconv = new Iconv('UTF-8', 'UTF-16');
        return iconv.convert(content);
    }catch(err){
        return err;
    }
}

ascii.utf_16.decode = function(content){
    try{
        var iconv = new Iconv('UTF-16', 'UTF-8');
        return iconv.convert(content);
    }catch(err){
        return err;
    }
}

ascii.utf_32.encode = function(content){
    try{
        var iconv = new Iconv('UTF-8', 'UTF-32');
        return iconv.convert(content);
    }catch(err){
        return err;
    }
}

ascii.utf_32.decode = function(content){
    try{
        var iconv = new Iconv('UTF-32', 'UTF-8');
        return iconv.convert(content);
    }catch(err){
        return err;
    }
}


export {ascii};