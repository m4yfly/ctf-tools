const assert = require('assert');
import {htmlEncode, htmlDecode} from '../../../src/components/DecodeComponent/DecodeItem/html/html'

describe('#html.js',() => {
    
    describe('#encode()',() => {
       it("htmlEncode(\"asdf & ÿ ü '\") should equal asdf &amp; &yuml; &uuml; &apos;",() => {
            assert.strictEqual(htmlEncode("asdf & ÿ ü '"),'asdf &amp; &yuml; &uuml; &apos;');
       });
    });

    describe('#decode()',() => {
        it("htmlDecode('asdf &amp; &yuml; &uuml; &apos;') should equal asdf & ÿ ü '",() => {
            assert.strictEqual(htmlDecode('asdf &amp; &yuml; &uuml; &apos;'),"asdf & ÿ ü '");
        });
    });
});