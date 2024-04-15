
function fact(n){
    let f=1;
    for(var i=1;i<=n;i++){
        f*=i;
    }
    return `\n\t Factorial of ${n} : ${f}`
}

console.log(fact(5));

// Factorial of 5 : 120