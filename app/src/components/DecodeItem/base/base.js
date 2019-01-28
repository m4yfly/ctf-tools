function base64encode(content) {
    return Buffer.from(content).toString('base64');

}
function base64decode(content){
    return Buffer.from(content,'base64').toString();
}

export {base64encode, base64decode}