s = "assasfdsfsvcxvwjfsfn2[94qroq";

s = s.split("");
const count = {};
s.forEach(element => {
    count[element] = (count[element]||0)+1;
});

// CONVERTING TO ARRAY
arr= [];
for(obj in count) {
    arr.push([obj,count[obj]]);
}
console.log(arr.sort((a,b)=> a[1]-b[1]));   