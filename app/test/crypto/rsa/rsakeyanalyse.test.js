const assert = require('assert');
import {rsakeyanalyse} from '../../../src/components/CryptoComponent/CryptoItem/rsakeyanalyse/rsakeyanalyse.js'
                    
describe('#rsakeygenerate.js',() => {
    
    describe('#rsakeyanalyse()',() => {
       it("test rsakeyanalyse()",() => {
            var pri_key="-----BEGIN RSA PRIVATE KEY-----\nMCMCAQACAwCb7QIDAQABAgIk9QICAN8CAgCzAgIAiQIBGwIBTA==\n-----END RSA PRIVATE KEY-----";
            var result = "n=39917\ne=65537\nd=9461\np=223\nq=179"
            assert.strictEqual(rsakeyanalyse(pri_key),result);
       });
    });

});