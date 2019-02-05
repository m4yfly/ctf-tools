const assert = require('assert');
import {hexEncode, hexDecode} from '../../../src/components/DecodeComponent/DecodeItem/hex/hex'

describe('#hex.js',() => {
    
    describe('#encode()',() => {
       it("hexEncode('zer0i3','') should equal 7a6572306933",() => {
            assert.strictEqual(hexEncode('zer0i3',''),'7a6572306933');
       });
    });

    describe('#decode()',() => {
        it("hexDecode('7a6572306933','') should equal zer0i3",() => {
            assert.strictEqual(hexDecode('7a6572306933',''),'zer0i3');
        });
    });
});