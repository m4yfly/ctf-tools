const assert = require('assert');
import {ascii} from '../../../src/components/DecodeComponent/DecodeItem/ascii/ascii'

describe('#ascii.js',() => {
    
    describe('#encode()',() => {
       it("ascii.utf_16.encode('中文test') should equal \\u4E2D\\u6587\\u0074\\u0065\\u0073\\u0074",() => {
            assert.strictEqual(ascii.utf_16.encode('中文test'),'\\u4E2D\\u6587\\u0074\\u0065\\u0073\\u0074');
       });
       it("ascii.utf_32.encode('中文test') should equal \\U00004E2D\\U00006587\\U00000074\\U00000065\\U00000073\\U00000074",() => {
            assert.strictEqual(ascii.utf_32.encode('中文test'),'\\U00004E2D\\U00006587\\U00000074\\U00000065\\U00000073\\U00000074');
       });
       it("ascii.unicode.encode('中文test') should equal &#20013;&#25991;&#116;&#101;&#115;&#116;",() => {
            assert.strictEqual(ascii.unicode.encode('中文test'),'&#20013;&#25991;&#116;&#101;&#115;&#116;');
       });
       it("ascii.hex.encode('中文test') should equal &#x4E2D;&#x6587;&#x74;&#x65;&#x73;&#x74;",() => {
            assert.strictEqual(ascii.hex.encode('中文test'),'&#x4E2D;&#x6587;&#x74;&#x65;&#x73;&#x74;');
       });
    });
});