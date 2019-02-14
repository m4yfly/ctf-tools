const assert = require('assert');
import {unicodeDecode, unicodeEncode} from '../../../src/components/DecodeComponent/DecodeItem/unicode/unicode'

describe('#unicode.js',() => {
    
    describe('#encode()',() => {
       it("unicodeEncode('测试test') should equal &#27979;&#35797;&#116;&#101;&#115;&#116;",() => {
            assert.strictEqual(unicodeEncode('测试test'),'&#27979;&#35797;&#116;&#101;&#115;&#116;');
       });
    });

    describe('#decode()',() => {
        it("unicodeDecode('&#27979;&#35797;&#116;&#101;&#115;&#116;') should equal 测试test",() => {
            assert.strictEqual(unicodeDecode('&#27979;&#35797;&#116;&#101;&#115;&#116;'),'测试test');
        });
    });
});