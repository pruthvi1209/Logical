 thirdLargest(a, n)
    {
        if(n <= 2){
            return -1;
        }
        let first = a[0];
        let second = -1;
        let third = -1;
        for(let i=0; i<n ; i++){
            if(a[i] > first){
                third= second;
                second = first;
                first = a[i]
            } else if(a[i]> second && a[i] !== first){ 
                third= second;
                second = a[i];
            } else if(a[i] > third && a[i] !== first && a[i] !== second) {
                third = a[i];
            }
        }
        
    return third;
    }
