const assert = require('assert');
import {pyencode,pydecode} from '../../../src/components/MiscComponent/MiscItem/punycode/punycode'

describe('#pyencode.js',() => {
    
    describe('#encode()',() => {
       it("pyencode('mañana') should equal maana-pta",() => {
            assert.strictEqual(pyencode('mañana'),'maana-pta');
       });
    });

    describe('#decode()',() => {
        it("pydecode('--dqo34k') should equal ☃-⌘",() => {
             assert.strictEqual(pydecode('--dqo34k'),'☃-⌘');
        });
     });
});