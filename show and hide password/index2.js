function hidepassword(){
    const eles= document.getElementsByClassName('input');
    eles[1].type="password";
}
function showpassword(){
    const eles=document.getElementsByClassName('input')
    eles[1].type="text";
}