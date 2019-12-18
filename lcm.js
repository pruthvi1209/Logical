function gcd(a,b){
    if(a == 0) {
        return b;
    }
    return gcd(b%a,a);
}

function lcm(a,b) {
return (a*b)/gcd(a,b);
}

console.log(lcm(20,24));
