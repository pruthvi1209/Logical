let a = [1234,324,23423,1231];

for(let i = a.length-1; i>=0 ; i--) {
    for(let j=1; j<=i; j++) {
        if( a[j]< a[j-1]) {
            [a[j],a[j-1]] = [a[j-1],a[j]];
        }
    }
}
console.log(a);