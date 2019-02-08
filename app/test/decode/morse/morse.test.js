const assert = require('assert');
import {morseEncode, morseDecode} from '../../../src/components/DecodeComponent/DecodeItem/morse/morse'

describe('#morse.js',() => {
    
    describe('#encode()',() => {
       it("morseEncode('中文test') should equal -..---...-.--.- --..-.--....--- - . ... -",() => {
            assert.strictEqual(morseEncode('中文test'),'-..---...-.--.- --..-.--....--- - . ... -');
       });
    });

    describe('#decode()',() => {
        it("morseDecode('-..---...-.--.- --..-.--....--- - . ... -') should equal 中文test",() => {
            assert.strictEqual(morseDecode('-..---...-.--.- --..-.--....--- - . ... -'),'中文test');
        });
    });
});