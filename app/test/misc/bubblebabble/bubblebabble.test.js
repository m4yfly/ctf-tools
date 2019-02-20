const assert = require('assert');
import {bbencode,bbdecode} from '../../../src/components/MiscComponent/MiscItem/bubblebabble/bubblebabble'

describe('#bubblebabble.js',() => {
    
    describe('#encode()',() => {
       it("bbencode('Pineapple') should equal xigak-nyryk-humil-bosek-sonax",() => {
            assert.strictEqual(bbencode('Pineapple'),'xigak-nyryk-humil-bosek-sonax');
       });
    });

    describe('#decode()',() => {
        it("bbdecode('xigak-nyryk-humil-bosek-sonax') should equal Pineapple",() => {
             assert.strictEqual(bbdecode('xigak-nyryk-humil-bosek-sonax'),'Pineapple');
        });
     });
});