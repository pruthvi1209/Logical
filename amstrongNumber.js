let n = 153;
//Find the lenght of Given Number
function findNoOfDigits(x) {
    return x.toString().length;
}

function findIfAmstrong(n,exp) {
 let sum=0;
 for(let i=0; i <exp; i++) {
     sum += Math.pow(Number(n.toString()[i]),exp);
 }
 console.log(sum);
 return(n===sum);
}
console.log(findIfAmstrong(n, Number(findNoOfDigits(n))));