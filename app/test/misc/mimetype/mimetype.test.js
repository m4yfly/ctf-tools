const assert = require('assert');
import {detect} from '../../../src/components/MiscComponent/MiscItem/mimetype/mimetype'

describe('#mimetype.js',() => {
    
    describe('#detect()',() => {
       it("detect('zer0i3.jpg') should equal image/jpeg",() => {
            assert.strictEqual(detect('zer0i3.jpg'),'image/jpeg');
       });
    });
});