const assert = require('assert');
import {encrypt,decrypt} from '../../../src/components/CryptoComponent/CryptoItem/a1z26/a1z26.js'
                    
describe('#a1z26.js',() => {
    
    describe('#encrypt()',() => {
       it("test a1z26 encrypt",() => {
            assert.strictEqual(encrypt('aiyo')=='1-9-25-15',true);
       });
    });

    describe('#decrypt()',() => {
        it("test a1z26 decrypt",() => {
            assert.strictEqual(decrypt('1-9-25-15')=='aiyo',true);
        });
    });
});