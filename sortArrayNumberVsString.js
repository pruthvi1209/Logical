let a = ["123",".","{","}","3","4","%","6",":"];
currentIndex=0;
while(currentIndex < a.length) {
    if(!isNaN(a[currentIndex])){
        currentIndex++;
    } else {
        let exchanged = false;
        for(let i = currentIndex; i < a.length; i++) {
            if(!isNaN(a[i])) {
                [a[currentIndex],a[i]] = [a[i], a[currentIndex]];
                currentIndex++;
                exchanged = true;
                break;
            }
        }
        if(!exchanged) {
            currentIndex++;
        }
    }
}
a.forEach((val) => console.log(val));