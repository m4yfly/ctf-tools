var tapnode = require('tapnode');
//tapnode.grid
/*
    1       2       3       4       5
1   A       B       C/K     D       E
2   F       G       H       I       J
3   L       M       N       O       P
4   Q       R       S       T       U
5   V       W       X       Y       Z

*/

function tapEncode(content){
    try{
        return tapnode.encode(content);
    }catch(err){
        return err;
    }
}
function tapDecode(content){
    try{
        return tapnode.decode(content);
    }catch(err){
        return err;
    }
}

export {tapEncode, tapDecode}