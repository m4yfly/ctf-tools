const assert = require('assert');
import {bfencode,bfdecode} from '../../../src/components/MiscComponent/MiscItem/brainfuck/brainfuck'

describe('#brainfuck.js',() => {
    
    describe('#encode()',() => {
       it("bfencode('hello') should equal result",() => {
            assert.strictEqual(bfencode('hello'),'++++++++++[>++++++++++>++++++++++>+++++++++++>+++++++++++>+++++++++++<<<<<-]>++++.>+.>--.>--.>+.');
       });
    });

    describe('#decode()',() => {
        it("bfdecode(result) should equal hello",() => {
             assert.strictEqual(bfdecode('++++++++++[>++++++++++>++++++++++>+++++++++++>+++++++++++>+++++++++++<<<<<-]>++++.>+.>--.>--.>+.'),'hello');
        });
     });
});