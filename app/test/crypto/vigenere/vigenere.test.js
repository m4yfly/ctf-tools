const assert = require('assert');
import {encode,decode} from '../../../src/components/CryptoComponent/CryptoItem/vigenere/vigenere.js'
                    
describe('#vigenere.js',() => {
    
    describe('#encode()',() => {
       it("test vigenere encode",() => {
            assert.strictEqual(encode('neko','nano')=='aexc',true);
       });
    });

    describe('#decode()',() => {
        it("test vigenere decode",() => {
            assert.strictEqual(decode('neko','nano')=='aexa',true);
        });
    });
});