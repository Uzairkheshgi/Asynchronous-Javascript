var logOne = new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log("one!");
   }, Math.random() * 1000);
}) 
 var logTwo = new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log("two!");
   }, Math.random() * 1000);
 })
 var inOrder=(logOne, logTwo)=>{
  return (logOne, logTwo)
 }
inOrder.then((res)=>console.log(res))
//  Promise.all([logOne, logTwo]).then(res=>{(console.log(res[0])), console.log(res[1])})
//  inOrder(logOne, logTwo);

// var logOne=setTimeout(function() {
//       console.log("one!");
//     }, Math.random() * 1000);
  
//   var logTwo=setTimeout(function() {
//       console.log("two!");
//     }, Math.random() * 1000);
  
// const inOrder=()=>{
//     return new Promise((resolve, reject) =>{
//         resolve(logOne)
//     });
// };
// inOrder().then((logTwo))
// //   function inOrder(a, b) {
// //     Promise.resolve(a).then(b)
// //   }
// //   inOrder(logOne, logTwo);