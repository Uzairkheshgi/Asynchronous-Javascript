var logOne = setTimeout(function() {
    console.log("one!");
   }, Math.random() * 1000);
   var logTwo = setTimeout(function() {
    console.log("two!");
   }, Math.random() * 1000);
   var inOrder=(logOne, logTwo) =>{
    return new Promise((resolve, reject) => {
        
    })
   }
   inOrder()