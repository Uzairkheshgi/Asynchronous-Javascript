fetch('todos/ali.json').then((res)=>{
    console.log('resolved', res)
    return res.json()
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("error", err)
})