const assert = require('assert');
import {urlEncode, urlDecode} from '../../../src/components/DecodeComponent/DecodeItem/url/url'

describe('#url.js',() => {
    
    describe('#encode()',() => {
       it("urlEncode('http://aiyo.xyz/?测试','URL') should equal http%3A%2F%2Faiyo.xyz%2F%3F%E6%B5%8B%E8%AF%95",() => {
            assert.strictEqual(urlEncode('http://aiyo.xyz/?测试','URL'),'http%3A%2F%2Faiyo.xyz%2F%3F%E6%B5%8B%E8%AF%95');
       });
       it("urlEncode('http://aiyo.xyz/?测试','URL_ALL') should equal %68%74%74%70%3a%2f%2f%61%69%79%6f%2e%78%79%7a%2f%3f%e6%b5%8b%e8%af%95",() => {
            assert.strictEqual(urlEncode('http://aiyo.xyz/?测试','URL_ALL'),'%68%74%74%70%3a%2f%2f%61%69%79%6f%2e%78%79%7a%2f%3f%e6%b5%8b%e8%af%95');
       });
    });

    describe('#decode()',() => {
        it("urlDecode('http%3A%2F%2Faiyo.xyz%2F%3F%E6%B5%8B%E8%AF%95','URL') should equal http://aiyo.xyz/?测试",() => {
            assert.strictEqual(urlDecode('http%3A%2F%2Faiyo.xyz%2F%3F%E6%B5%8B%E8%AF%95','URL'),'http://aiyo.xyz/?测试');
        });
        it("urlDecode('%68%74%74%70%3a%2f%2f%61%69%79%6f%2e%78%79%7a%2f%3f%e6%b5%8b%e8%af%95','URL_ALL') should equal http://aiyo.xyz/?测试",() => {
            assert.strictEqual(urlDecode('%68%74%74%70%3a%2f%2f%61%69%79%6f%2e%78%79%7a%2f%3f%e6%b5%8b%e8%af%95','URL_ALL'),'http://aiyo.xyz/?测试');
        });
    });
});