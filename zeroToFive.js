function convertFive(N){
let x = 10;
let post = 0;
let result = 0;
while(N >= 1) {
const curr = N%10;
if( curr === 0){
result+= 5 *(Math.pow(x,post));
}else {
result+= (N%10) * (Math.pow(x,post));
}
N = Math.trunc(N/x);
post++;
}
return result;
}

console.log(convertFive(1010101010101010));
