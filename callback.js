const f1= ()=>{
    const request= new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readystate)
        if (request.readyState===4 && request.status===200){
            const data=JSON.parse(request.responseText)
            // console.log(request.responseText)
            callback(undefined, data)
        }
        else if(request.readyState===4 && request.status!==200){
            // console.log("Error! Couldn't fetch the data")
            callback("Error occured", undefined)
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}
// console.log("one");
// console.log("two");
function callback(err, data){
        console.log("Callback fired")
        if (data){
            console.log(data)
        }
        else if (err){
            console.log(err)
        }
    }
f1();
// console.log("Three")