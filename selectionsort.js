let a = [1234,324,23423,1231];
// findLowest(a,index);
// swap current index with lowest index
// repeat two steps untill end
 for(i =0; i < a.length; i++) {
     minIndex = i;
     for(let j=i+1; j<a.length; j++) {
         if(a[j] < a[minIndex] ){
             minIndex = j;
         }
     }
     [a[i],a[minIndex]] = [a[minIndex],a[i]];
 }
 console.log(a);
