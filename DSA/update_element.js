function array(a){
 
    for(let i =0; i<= a.length - 1;i++){
        a[i] *= a[i];
    }
    for(let i =0; i<= a.length - 1;i++){
        process.stdout.write(a[i] + ' ');
    }
    
}
array([1, 3, 5, -3]);