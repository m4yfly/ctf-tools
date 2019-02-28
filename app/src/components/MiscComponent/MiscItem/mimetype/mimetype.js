import { detectMimeType } from 'emailjs-mime-types'

function detect(content){
    try{
        return detectMimeType(content.substr(content.lastIndexOf('.')+1));
    }catch(err){
        return err;
    }
}

export {detect}