// Set Operator gives unique elements from the input

x= [{"a":1}, 2,{"a":1},2, {"a":1}];

console.log(new Set(x));

var entries = [1, [2, 5], [6, 7], 9];
var flat_entries = [].concat(...entries); 
// [1, 2, 5, 6, 7, 9]