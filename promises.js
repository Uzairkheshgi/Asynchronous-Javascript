const compare = (a)=>{
    return new Promise((resolve, reject) => {
        if (a>10){
            resolve({'a':a, 'mes1':"The number is greater than 10"})
        }
        else {
            reject("Number is smaller than 10")
        }
    })
};
compare(5).then((mes)=>{
    console.log(mes.a, mes.mes1)
})
.catch(m1=>{console.log(m1)})
.finally(()=>{console.log("This promise is setteled")})
