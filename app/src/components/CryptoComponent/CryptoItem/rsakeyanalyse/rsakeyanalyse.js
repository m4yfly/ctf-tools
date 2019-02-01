var NodeRSA = require('node-rsa');
function rsakeyanalyse(content){
    try{
        var result = '';
        var key = new NodeRSA();
        var n = '';
        var p = '';
        var q = '';
        var e = '';
        var d = '';
        if(content.indexOf('PUBLIC')>-1){
            if(content.indexOf('RSA')>-1){
                key.importKey(content,'pkcs1-public');
            }else{
                key.importKey(content,'pkcs8-public');
            }
            n = key['keyPair'].n.toString();
            e = key['keyPair'].e.toString();
            
            result='n='+n+'\ne='+e;
        }
        else if(content.indexOf('PRIVATE')>-1){
            if(content.indexOf('RSA')>-1){
                key.importKey(content,'pkcs1-private');
            }else{
                key.importKey(content,'pkcs8-private');
            }
            n = key['keyPair'].n.toString();
            e = key['keyPair'].e.toString();
            d = key['keyPair'].d.toString();
            p = key['keyPair'].p.toString();
            q = key['keyPair'].q.toString();

            result='n='+n+'\ne='+e+'\nd='+d+'\np='+p+'\nq='+q;
        }else{
            result= 'Not an rsa key';
        }

        return result;
        
    }catch(err){
        console.error(err);
        console.error('analyse key failed');
        return 'analyse key failed';
    }
   
}

export {rsakeyanalyse}