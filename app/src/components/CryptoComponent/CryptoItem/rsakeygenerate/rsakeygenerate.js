var NodeRSA = require('node-rsa');
function generate_key_pkcs1(length,e){
    try{
        var public_key='';
        var private_key='';
        length = parseInt(length);
        e = parseInt(e);
        if(length>=4096){
            return ['dont support bit length > 4096','dont support bit length > 4096',['','','','','']];
        }
        const key = new NodeRSA();
        key.generateKeyPair(length,e);
        public_key = key.exportKey('pkcs1-public');
        private_key = key.exportKey('pkcs1-private');
        var n = key['keyPair'].n.toString();
        var q = key['keyPair'].q.toString();
        var p = key['keyPair'].p.toString();
        var d = key['keyPair'].d.toString();
        e = e.toString();
        return [public_key,private_key,[n,q,p,d,e]];
    }catch(err){
        console.err(err);
        console.err('generate key failed');
        return ['generate key failed','generate key failed',['','','','','']];
    }
   
}
function generate_key_pkcs8(length,e){
    try{
        var public_key='';
        var private_key='';
        length = parseInt(length);
        e = parseInt(e);
        if(length>=4096){
            return ['dont support bit length > 4096','dont support bit length > 4096',['','','','','']];
        }
        const key = new NodeRSA();
        key.generateKeyPair(length,e);
        public_key = key.exportKey('pkcs8-public');
        private_key = key.exportKey('pkcs8-private');
        var n = key['keyPair'].n.toString();
        var q = key['keyPair'].q.toString();
        var p = key['keyPair'].p.toString();
        var d = key['keyPair'].d.toString();
        e = e.toString();
        return [public_key,private_key,[n,q,p,d,e]];
    }catch(err){
        console.err(err);
        console.err('generate key failed');
        return ['generate key failed','generate key failed',['','','','','']];
    }
    
}

export {generate_key_pkcs1,generate_key_pkcs8}