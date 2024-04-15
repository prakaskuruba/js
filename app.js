
function sum (n){
    while(n==0){
        return 0
    }
    return `\n\t ${n+sum(n-1)}`
}
sum(n);
