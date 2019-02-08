const assert = require('assert');
import {tapEncode, tapDecode} from '../../../src/components/DecodeComponent/DecodeItem/tap/tap'

describe('#tap.js',() => {
    
    describe('#encode()',() => {
       it("tapEncode('water') should equal ..... .. . . .... .... . ..... .... ..",() => {
            assert.strictEqual(tapEncode('water'),'..... .. . . .... .... . ..... .... ..');
       });
    });

    describe('#decode()',() => {
        it("tapDecode('..... .. . . .... .... . ..... .... ..') should equal WATER",() => {
            assert.strictEqual(tapDecode('..... .. . . .... .... . ..... .... ..'),'WATER');
        });
    });
});