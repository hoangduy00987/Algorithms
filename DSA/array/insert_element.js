// option 1
function array(a,k,x){
    n = a.length;
    for(i = n; i >= k + 1; i--){
        a[i] = a[i-1];

    }
    
    a[k] = x;
    console.log(a);
    
}
console.log(array([1,2,3,4],1,10));

// //option 2
// function array(a,k,x){
//     a.splice(k,0,x);
//     return a;
// }
// console.log(array([1,2,3,4],1,10).join(" "));
