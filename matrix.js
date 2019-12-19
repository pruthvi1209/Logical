let a = [[4,5,6], [1,2,3], [7,1,9]];
b = [];
a.forEach( (row, rowIndex) => row.forEach( (el, colIndex) =>{
    if(el === 1){
        b.push([rowIndex, colIndex]);
    }
}));
// cannot follow below method because altering main source may incure other elements
// for(let i=0; i<a.length ;i++){
//     for(let j=0;j<a[0].length; j++) {
//         if(a[i][j] === 1) {
//             console.log(i,j);
//             // makeOver(i,j);
//         }
//     }
// }
 b.forEach( (obj) => makeOver(obj[0],obj[1]));

function makeOver(m,n) {
    for(let i=0;i<a.length; i++){
        a[i][n] = 1;       
    }
    for(let i=0;i<a.length; i++){
        a[m][i] = 1;       
    }
}

console.log(a);