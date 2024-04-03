const x = 1;
const promise  = new Promise((resolve, reject)=>{
    if(x == 1){
        resolve("Success");
    }
    else{
        reject("Rejected")
    }
})

// promise.then((res) => console.log("Rse:",res)).catch(err=>console.log("err",err));
async function asfunc(){
    try{
        // fetch().then(response => response.json()).then(json => console.log(json));
        // const res = await fetch();
        // const jsonData = res.json();
        // console.log("promisewithout await", promise);
        // const resolvedValue = await promise;
        // console.log("Promise afrer await", resolvedValue);
        return 5;
    }catch(err){
        console.error(err)
    }
}
asfunc().then((data) => {
    // data+5;
    // data+6;
    console.log(data);
});