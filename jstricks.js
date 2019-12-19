if(true, false, true) {
    console.log("if condition with <boolean, boolean ......> will take later boolean")
} else {
    console.log("In this case its FALSE");
}

function spreadOperator(a, ...b) {
    console.log(b);
    console.log(b.length);
}
const data = {
    "name" : "pruthvi",
    "age" : "25"
}
spreadOperator(1,2,3,"a","a","a");
console.log(delete data.age);
console.log(delete data.age);
data.hasOwnProperty("age") ? delete data.age : console.log("NOT FOUND!!!!!!", data.age);
console.log(data, data.age);


