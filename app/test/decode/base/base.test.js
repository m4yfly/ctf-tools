const assert = require('assert');
import {baseEncode, baseDecode} from '../../../src/components/DecodeComponent/DecodeItem/base/base'

describe('#base.js',() => {
    
    describe('#encode()',() => {
       it("baseEncode('nekoneko','base64') should equal bmVrb25la28=",() => {
            assert.strictEqual(baseEncode('nekoneko','base64'),'bmVrb25la28=');
       });
    });

    describe('#decode()',() => {
        it("baseDecode('bmVrb25la28=','base64') should equal nekoneko",() => {
            assert.strictEqual(baseDecode('bmVrb25la2','base64'),'nekoneko');
        });
    });
});