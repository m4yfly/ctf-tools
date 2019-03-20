const assert = require('assert');
import {encode,decode} from '../../../src/components/MiscComponent/MiscItem/xxencode/xxencode'

describe('#xxencode.js',() => {
    
    describe('#encode()',() => {
       it("encode('Unix-to-Unix encoding') should equal JJKtdS0poPmpJPaZs64JiMqxYOKtb",() => {
            assert.strictEqual(encode('Unix-to-Unix encoding'),'JJKtdS0poPmpJPaZs64JiMqxYOKtb');
       });
    });

    describe('#decode()',() => {
        it("decode('JJKtdS0poPmpJPaZs64JiMqxYOKtb') should equal Unix-to-Unix encoding",() => {
             assert.strictEqual(decode('JJKtdS0poPmpJPaZs64JiMqxYOKtb'),'Unix-to-Unix encoding');
        });
     });
});