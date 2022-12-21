const f1= async ()=>{
    const res= await fetch("todos/alii.json");
    // To throw custom error if status is not 200 i.e url is not correct
    if(res.status!==200){
        throw new Error("Cann't fetch the data");
    }
    const data= await res.json();
    return data;
}
f1().then((data)=>{console.log('resolved', data)})
.catch(err=>{console.log("An error occured!", err.message)})