var isPalindrome = function(x) {
    let str = x.toString();
    let str2 = "";
    for(let i = str.length-1; i >= 0; i--){
        str2+=str[i];
    }
    if(str2==str){
        return true;
    }else{
        return false;
    }
    
    
};
// console.log(isPalindrome(10));
var isPalindrome3 = function(x) {
    let str = x.toString();
    let len = str.length;
    for (i = 0; i < Math.floor(len/2); i++){
        if(str[i] != str[len - 1 - i]){
            return false;
        }
    }
    return true;
    
};
console.log(isPalindrome3(101));
var isPalindrome = function(x) {
    let str = x.toString();
    return str === str.split('').reverse().join('');
    
};
// console.log(isPalindrome(101));