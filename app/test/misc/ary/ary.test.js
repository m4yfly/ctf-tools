const assert = require('assert');
import {ary} from '../../../src/components/MiscComponent/MiscItem/ary/ary'

describe('#ary.js',() => {
    
    describe('#convert()',() => {
       it("ary.convert_2('12345678') should equal 101111000110000101001110",() => {
            assert.strictEqual(ary.convert_2('12345678'),'101111000110000101001110');
       });
       it("ary.convert_8('12345678') should equal 57060516",() => {
            assert.strictEqual(ary.convert_8('12345678'),'57060516');
       });
       it("ary.convert_16('12345678') should equal bc614e",() => {
            assert.strictEqual(ary.convert_16('12345678'),'bc614e');
       });
    });

    describe('#parse()',() => {
        it("ary.parse_2('101111000110000101001110') should equal 12345678",() => {
            assert.strictEqual(ary.parse_2('101111000110000101001110'),12345678);
        });
        it("ary.parse_8('57060516') should equal 12345678",() => {
            assert.strictEqual(ary.parse_8('57060516'),12345678);
        });
        it("ary.parse_16('bc614e') should equal 12345678",() => {
            assert.strictEqual(ary.parse_16('bc614e'),12345678);
        });
    });
});