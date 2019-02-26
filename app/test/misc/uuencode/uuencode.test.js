const assert = require('assert');
import {encode,decode} from '../../../src/components/MiscComponent/MiscItem/uuencode/uuencode'

describe('#pyencode.js',() => {
    
    describe('#encode()',() => {
       it("encode('Unix-to-Unix encoding') should equal maana-pta",() => {
            assert.strictEqual(encode('Unix-to-Unix encoding'),'556YI>"UT;RU5;FEX(&5N8V]D:6YG\n');
       });
    });

    describe('#decode()',() => {
        it("decode('556YI>\"UT;RU5;FEX(&5N8V]D:6YG') should equal Unix-to-Unix encoding",() => {
             assert.strictEqual(decode('556YI>"UT;RU5;FEX(&5N8V]D:6YG'),'Unix-to-Unix encoding');
        });
     });
});