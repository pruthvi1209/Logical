
function febnociseries(n) {
    return n>0 ? n*febnociseries(n-1) : 1;
}
console.log(febnociseries(0));