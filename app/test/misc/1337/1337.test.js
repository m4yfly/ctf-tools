const assert = require('assert');
import {leetEncode} from '../../../src/components/MiscComponent/MiscItem/1337/1337'

describe('#l337.js',() => {
    
    describe('#encode()',() => {
       it("leetEncode('Leetspeak') should equal 13375p34k",() => {
            assert.strictEqual(leetEncode('Leetspeak'),'13375p34k');
       });
    });
});