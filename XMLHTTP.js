const request= new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if (request.readyState===4 && request.status===200){
        console.log(request, request.responseText)
    }
    else if (request.readyState===4 && request.status!==200){
        console.log("Error Occured")
    }
})
request.open("Get", 'https://jsonplaceholder.typicode.com/todoss/')
request.send();