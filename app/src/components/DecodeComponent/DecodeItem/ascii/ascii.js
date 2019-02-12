var ascii = {};

ascii.utf_16 = {}
ascii.utf_32 = {}
ascii.unicode = {}
ascii.hex = {}

function convertStringToUnicodeCodePoints(str) {
    var surrogate_1st = 0;
    var unicode_codes = [];
    for (var i = 0; i < str.length; ++i) {
      var utf16_code = str.charCodeAt(i);
      if (surrogate_1st != 0) {
        if (utf16_code >= 0xDC00 && utf16_code <= 0xDFFF) {
          var surrogate_2nd = utf16_code;
          var unicode_code = (surrogate_1st - 0xD800) * (1 << 10) + (1 << 16) +
                             (surrogate_2nd - 0xDC00);
          unicode_codes.push(unicode_code);
        } else {
          // Malformed surrogate pair ignored.
        }
        surrogate_1st = 0;
      } else if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
        surrogate_1st = utf16_code;
      } else {
        unicode_codes.push(utf16_code);
      }
    }
    return unicode_codes;
}

function escapeToNumRef(str, base) {
    var unicode_codes = convertStringToUnicodeCodePoints(str);
    var escaped = ''
    var prefix = base == 10 ? ''  : 'x';
    for (var i = 0; i < unicode_codes.length; ++i) {
      var code = unicode_codes[i].toString(base).toUpperCase();
      var num_ref = "&#" + prefix + code + ";"
      escaped += num_ref;
    }
    return escaped;
}

ascii.utf_16.encode = function(str){
    try{
        var escaped = ''
        for (var i = 0; i < str.length; ++i) {
            var hex = str.charCodeAt(i).toString(16).toUpperCase();
            escaped += "\\u" + "0000".substr(hex.length) + hex;
        }
        return escaped;
    }catch(err){
        return err;
    }
}

ascii.utf_32.encode = function(str){
    try{
        var escaped = ''
        var unicode_codes = convertStringToUnicodeCodePoints(str);
        for (var i = 0; i <unicode_codes.length; ++i) {
          var hex = unicode_codes[i].toString(16).toUpperCase();
          escaped += "\\U" + "00000000".substr(hex.length) + hex;
        }
        return escaped;
    }catch(err){
        return err;
    }
}

ascii.unicode.encode = function(content){
    try{
        return escapeToNumRef(content,10);
    }catch(err){
        return err;
    }
}

ascii.hex.encode = function(content){
    try{
        return escapeToNumRef(content,16);
    }catch(err){
        return err;
    }
}
export {ascii};