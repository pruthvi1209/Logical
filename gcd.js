a= 20;
b =28;

function gcd(a,b){
    if(a == 0) {
        return b;
    }
    return gcd(b%a,a);
}

function findGCD(a,b) {
    
    if(a==0) {
        return b;
    }
    if(b == 0) {
        return a;
    }
    if( a==b) {
        return a;
    }
    if( a > b) {
        return findGCD(a-b, a);
    }
    return findGCD(a, b-a);
}

console.log(gcd(18,81))