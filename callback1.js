const f1= (resource, callback)=>{
    const request= new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readystate)
        if (request.readyState===4 && request.status===200){
            // console.log(request.responseText)
            callback(undefined, request.responseText)
        }
        else if(request.readyState===4 && request.status!==200){
            // console.log("Error! Couldn't fetch the data")
            callback("Error occured", undefined)
        }
    })
    request.open('GET', resource);
    request.send();
}
// console.log("one");
// console.log("two");
// function callback
f1('todos/ali.json', (err, data)=>{
    console.log(data)
    f1('todos/luigi.json', (err, data)=>{
        console.log(data)
        f1('todos/shaun.json', (err, data)=>{
            console.log(data)
        });
        });
});
