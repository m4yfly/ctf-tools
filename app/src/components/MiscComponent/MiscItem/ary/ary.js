var ary = {};
var maxNum = Math.pow(2, 53);
ary.convert_2 = function(value){
    try{
        var n = parseInt(value);
        if(Math.abs(n)<maxNum){
            return n.toString(2);
        }else{
            return "lost precision";
        }
    }catch(err){
        return "convert to binary failed";
    }
}
ary.convert_8 = function(value){
    try{
        var n = parseInt(value);
        if(Math.abs(n)<maxNum){
            return n.toString(8);
        }else{
            return "lost precision";
        }
    }catch(err){
        return "convert to octal failed";
    }
}
ary.convert_10 = function(value){
    try{
        var n = parseInt(value);
        if(Math.abs(n)<maxNum){
            return n.toString(10);
        }else{
            return "lost precision";
        }
    }catch(err){
        return "convert to decimal failed";
    }
}
ary.convert_16 = function(value){
    try{
        var n = parseInt(value);
        if(Math.abs(n)<maxNum){
            return n.toString(16);
        }else{
            return "lost precision";
        }
    }catch(err){
        return "convert to hex failed";
    }
}
ary.parse_2 = function(value){
    try{
        var n = parseInt(value,2);
        if(Math.abs(n)<maxNum){
            return n;
        }else{
            return "lost precision";
        }
    }catch(err){
        return "parse binary failed";
    }
}
ary.parse_8 = function(value){
    try{
        var n = parseInt(value,8);
        if(Math.abs(n)<maxNum){
            return n;
        }else{
            return "lost precision";
        }
    }catch(err){
        return "parse octal failed";
    }
}
ary.parse_10 = function(value){
    try{
        var n = parseInt(value,10);
        if(Math.abs(n)<maxNum){
            return n;
        }else{
            return "lost precision";
        }
    }catch(err){
        return "parse decimal failed";
    }
}
ary.parse_16 = function(value){
    try{
        var n = parseInt(value,16);
        if(Math.abs(n)<maxNum){
            return n;
        }else{
            return "lost precision";
        }
    }catch(err){
        return "parse hex failed";
    }
}

export {ary}