async function f(){
    let promise = new Promise ((resolve, reject)=>{
        setTimeout(()=>resolve("done!"),1000)
    });
    
    let result = await promise;
    alert(result);
    
}
promise.finaly(()=>{
    console.log('Promise ready')
}).catch(err => console.log(err))

