
function rev(n){
    let ori=n;
    let r=0;
    while(n>0){
        let ld=n%10;
        r=parseInt(r*10+ld);
        n= Math.floor(n/10);

    }
    return `\n\t num : ${ori} \n\t rev : ${r} \n`;

}

const ans=rev(456);
console.log(ans);

// num : 456 
// rev : 654 


