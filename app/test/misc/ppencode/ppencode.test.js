const assert = require('assert');
import {fppencode} from '../../../src/components/MiscComponent/MiscItem/ppencode/ppencode'

describe('#ppencode.js',() => {
    
    describe('#encode()',() => {
       it("fppencode('zer0i3') should equal result",() => {
            assert.strictEqual(fppencode('zer0i3').startsWith("#!/usr/bin/perl -w"),true);
       });
    });
});