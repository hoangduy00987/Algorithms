
function array(n){
    let sum = 0;
    for(let i = 0; i<= n.length - 1 ; i++){
        sum += parseInt(n[i]);
    }
    return sum;
}
function init(){
    let prompt = require('prompt-sync')();
    let arr = [];
    let n = parseInt(prompt("Input n: "));
    for(i=0;i<=n;i++){
        let value = prompt(`input Element ${i + 1}: `);
        arr.push(value);
    }
    console.log(arr);
    console.log(array(arr));
}
init();