// option 1
function deleteElement(a,k){
 let n = a.length;
    for(let i = k;i<n;i++){
      a[i] = a[i+1];
    }
    n--;
    console.log(a.join(" "));
    
}
deleteElement([1,2,3],2);

// // option 2
function deleteElement(a,k){
    let index = a.indexOf(k);
    if(index != -1){
        a.splice(index,1);
        console.log(a.join(" "));
    }
    
}
deleteElement([1,2,3,4],2);