new Promise((resolve,reject) =>{
    setTimeout(()=> resolve(1),1000);
}).then((data) => {
    data = data*2;
    console.log("THEN 1",data);
    return new Error("EXCEPTION1");
    return data;
}).then((data)=>{ 
    data = data*2;
    console.log("THEN 2",data);
    return null;
    // return data; next then is not called because this is not returing;
     })
.catch(e => console.log(e, "EXCEPTION"))
.then(data =>{
    // data =data*2; 
    console.log("THEN 3", data);
    return data;
});