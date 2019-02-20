var bubble = require('./bubble_babble');

function bbencode(content){
    try{
        return bubble.encode(content);
    }catch(err){
        return err;
    }
}

function bbdecode(content){
    try{
        return bubble.decode(content);
    }catch(err){
        return err;
    }
}

export {bbencode,bbdecode}