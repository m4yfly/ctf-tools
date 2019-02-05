function urlEncode(content,type) {
    if(type === "URL"){
        return encodeURIComponent(content);
    }
    else if(type === "URL_ALL"){
        var contentList = content.split('');
        var result = contentList.map(function(val){
            let newVal = encodeURIComponent(val);
            if(newVal !== val){
                return newVal.toLowerCase();
            }
            return '%' + Buffer.from(val,'utf-8').toString('hex');
        });
        return result.join('');
    }
}

function urlDecode(content,type) {
   if(type === "URL"){
       return decodeURIComponent(content);
   }
   else if(type === "URL_ALL"){
       return decodeURIComponent(content);
   }
}

export {urlEncode, urlDecode}