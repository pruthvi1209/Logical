for(let i=0 ;i<5 ; i++) {
    setTimeout( () => {

        console.log(i)
    }, i*1000);
}

console.log(false === 0);
console.log( false == 0);

function foo1 () {
    return { b:"pruthvi"}
}


function foo2 () {
    return { b:"pruthvi"}
}

console.log(foo1(), foo2());