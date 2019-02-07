const assert = require('assert');
import {escapeEncode, escapeDecode} from '../../../src/components/DecodeComponent/DecodeItem/escape/escape'

describe('#escape.js',() => {
    
    describe('#encode()',() => {
       it("escapeEncode('?!=()#%&') should equal %3F%21%3D%28%29%23%25%26",() => {
            assert.strictEqual(escapeEncode('?!=()#%&'),'%3F%21%3D%28%29%23%25%26');
       });
    });

    describe('#decode()',() => {
        it("escapeDecode('%3F%21%3D%28%29%23%25%26') should equal ?!=()#%&",() => {
            assert.strictEqual(escapeDecode('%3F%21%3D%28%29%23%25%26'),"?!=()#%&");
        });
    });
});