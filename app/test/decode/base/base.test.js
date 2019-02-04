const assert = require('assert');
import {baseEncode, baseDecode} from '../../../src/components/DecodeComponent/DecodeItem/base/base'

describe('#base.js',() => {
    
    describe('#encode()',() => {
       it("baseEncode('nekoneko','base64') should equal bmVrb25la28=",() => {
            assert.strictEqual(baseEncode('nekoneko','base64'),'bmVrb25la28=');
       });
       it("baseEncode('zer0i3','base32') should equal PJSXEMDJGM======",() => {
            assert.strictEqual(baseEncode('zer0i3','base32'),'PJSXEMDJGM======');
       });
       it("baseEncode('zer0i3','base16') should equal 7A6572306933",() => {
            assert.strictEqual(baseEncode('zer0i3','base16'),'7A6572306933');
       });
       it("baseEncode('9527','base36') should equal 7cn",() => {
            assert.strictEqual(baseEncode('9527','base36'),'7cn');
       });
       it("baseEncode('9527','base58') should equal 3Qg",() => {
            assert.strictEqual(baseEncode('9527','base58'),'3Qg');
       });
       it("baseEncode('9527','base62') should equal 2tF",() => {
            assert.strictEqual(baseEncode('9527','base62'),'2tF');
       });
       it("baseEncode('zer0i3','base91') should equal lPFK~/LB",() => {
            assert.strictEqual(baseEncode('zer0i3','base91'),'lPFK~/LB');
       });
       it("baseEncode('zer0i3','base92') should equal M%_;g*W|",() => {
            assert.strictEqual(baseEncode('zer0i3','base92'),'M%_;g*W|');
       });
       it("baseEncode('zer0i3','base85') should equal dS!AjX)^",() => {
            assert.strictEqual(baseEncode('zer0i3','base85'),'dS!AjX)^');
       });
    });

    describe('#decode()',() => {
        it("baseDecode('bmVrb25la28=','base64') should equal nekoneko",() => {
            assert.strictEqual(baseDecode('bmVrb25la28=','base64'),'nekoneko');
        });
        it("baseDecode('PJSXEMDJGM======','base32') should equal zer0i3",() => {
            assert.strictEqual(baseDecode('PJSXEMDJGM======','base32'),'zer0i3');
        });
        it("baseDecode('7A6572306933','base16') should equal zer0i3",() => {
            assert.strictEqual(baseDecode('7A6572306933','base16'),'zer0i3');
        });
        it("baseDecode('7cn','base36') should equal 9527",() => {
            assert.strictEqual(baseDecode('7cn','base36'),9527);
        });
        it("baseDecode('3Qg','base58') should equal 9527",() => {
            assert.strictEqual(baseDecode('3Qg','base58'),9527);
        });
        it("baseDecode('2tF','base62') should equal 9527",() => {
            assert.strictEqual(baseDecode('2tF','base62'),9527);
        });
        it("baseDecode('lPFK~/LB','base91') should equal zer0i3",() => {
            assert.strictEqual(baseDecode('lPFK~/LB','base91'),'zer0i3');
        });
        it("baseDecode('M%_;g*W|','base92') should equal zer0i3",() => {
            assert.strictEqual(baseDecode('M%_;g*W|','base92'),'zer0i3');
        });
        it("baseDecode('dS!AjX)^','base85') should equal zer0i3",() => {
            assert.strictEqual(baseDecode('dS!AjX)^','base85'),'zer0i3');
        });
    });
});