// 0 Ka MATLAB FLASE || undefined || null 
// !0 ka Matlab true
if(true, false, true) {
    console.log("if condition with <boolean, boolean ......> will take later boolean")
} else {
    console.log("In this case its FALSE");
}

console.log("undefined||null", undefined||null);
console.log("undefined&&null", undefined&&null);
console.log("truthy||truthy/Falsy", 3||5, 5||3, true||0); // returns first value
console.log("truthy&&truthy", 3&&5, 5&&3, true||1); // return last condition value
console.log("false||False", 0||undefined, 5||3, true||0); //return last condtion value
console.log("false&&False", 0&&undefined, 5&&3, true&&0); // return first condition value

//BASIC CONCEPT : && Waits untill last condition to check if there is any false value to return false;
//              : || return if any value is true



