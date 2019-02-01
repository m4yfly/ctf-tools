const assert = require('assert');
import {generate_key_pkcs1,generate_key_pkcs8} from '../../../src/components/CryptoComponent/CryptoItem/rsakeygenerate/rsakeygenerate.js'
                    
describe('#rsakeygenerate.js',() => {
    
    describe('#generate_key_pkcs1()',() => {
       it("test generate_key_pkcs1()",() => {
            assert.strictEqual(generate_key_pkcs1('512','65537')[0].indexOf('BEGIN RSA PUBLIC KEY')>-1,true);
            assert.strictEqual(generate_key_pkcs1('512','65537')[1].indexOf('BEGIN RSA PRIVATE KEY')>-1,true);
       });
    });

    describe('#generate_key_pkcs8()',() => {
        it("test generate_key_pkcs8()",() => {
            assert.strictEqual(generate_key_pkcs8('512','65537')[0].indexOf('BEGIN PUBLIC KEY')>-1,true);
            assert.strictEqual(generate_key_pkcs8('512','65537')[1].indexOf('BEGIN PRIVATE KEY')>-1,true);
        });
    });
});