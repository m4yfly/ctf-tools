const assert = require('assert');
import {qpEncode, qpDecode} from '../../../src/components/DecodeComponent/DecodeItem/qp/qp'

describe('#qp.js',() => {
    
    describe('#encode()',() => {
       it("qpEncode('Iñtërnâtiônàlizætiøn') should equal I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n",() => {
            assert.strictEqual(qpEncode('Iñtërnâtiônàlizætiøn'),'I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n');
       });
    });

    describe('#decode()',() => {
        it("qpDecode('I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n','') should equal Iñtërnâtiônàlizætiøn",() => {
            assert.strictEqual(qpDecode('I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n',''),'Iñtërnâtiônàlizætiøn');
        });
    });
});