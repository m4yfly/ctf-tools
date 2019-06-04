
const alpha="abcdefghijklmnopqrstuvwxyz";
function az_encrypt(plaintext){
    var t=plaintext.toLowerCase();
    var outt="";
    var needseparator=false;
    for (var i=0,len=t.length;i<len;i++){
        var l=t[i];
        var idx=alpha.indexOf(l);
        if (-1 == idx){
            outt+=l;
            needseparator=false;
            return '加密失败！';
        }
        else{
            if (needseparator) outt +="-";
            outt +=(idx+1).toString();
            needseparator=true;
        }
    }
    return outt;
}

function az_decrypt(ciphertext){
    var t = ciphertext.replace(/([\d]{1,2})([^\d]|$)/g, function(match, p1, p2) {
		return alpha[Number(p1)-1] + (p2 == "-" ? "" : p2);
	});
	return t;
}


function encrypt(content){
    try{
        return az_encrypt(content);
    }catch(err){
        return '只能为英文字符/字符串！';
    }
}

function decrypt(content){
    try{
        return az_decrypt(content);
    }catch(err){
        return err;
    }
}

export {encrypt,decrypt}