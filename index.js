function checking() {
    let palin = prompt();
    let palins = palin.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let palindrome = palins.split('').reverse().join('');
    if (palins === palindrome) {
        return true;
    } else {
        return false;
    }
}
alert(checking());  




/*function palindrome(str){
    let palin = str.split("").reverse().join("");

    if(palin === str){
        return true
    }else{
        return false;
    }
}
console.log(palindrome("eye"))
palindrome("step not on pets")*/