function isPrime(a){
    if(a <= 1) return false;
    for(i = 2; i<=Math.sqrt(a);i++){
        if(a % i == 0) return false;
    }
    return true;
}

function array(a){
    for(let i = 0; i<=a.length-1;i++){
        if(isPrime(a[i])){
            process.stdout.write(a[i] + ' ');
        }
    }
}
array([1,2,3,4,5]);