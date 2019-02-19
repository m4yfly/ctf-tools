var uf = require('unfuck');
var compiler = uf.compiler();

function bfencode(txt){
    try{
        var base = "++++++++++["
        var end = "";
        var print = "";
            
        var chars = txt.split('');
        var cells = [];
        var codes = [];
            
        for(var i = 0; i <= chars.length-1; i++) {
            cells.push(Math.round(chars[i].charCodeAt(0) /10));
            codes.push(chars[i].charCodeAt(0));
        }
            
        for(var i = 0; i <= cells.length-1; i++) {
            base = base + ">"
            end = end + "<";
                
            for(var x = 0; x <= cells[i]-1; x++) {
                base = base + "+";
            }
                
            print = print + ">"
                
            var _ = codes[i] - cells[i] * 10
                
            if(_ < 0) _ = -_
                
            for(var z = 0; z <= _-1; z++) {
                var val = codes[i] - cells[i] * 10
                    
                if(val <= 0) {
                    print = print + "-"
                } else print = print + "+"
            }
            print = print + "."
        }
            
        end = end + "-]"
            
        var code = base + end + print;
        
        return code;
    }catch(err){
        return err;
    }
}
function bfdecode(content){
    try{
        return compiler.run(content,'');
    }catch(err){
        return err;
    }
}

export {bfdecode,bfencode}