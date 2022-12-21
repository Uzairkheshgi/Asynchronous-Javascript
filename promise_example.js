function watchTutorialCallback(callback, errorCallback) {
    return new Promise((resolve, reject) => {
        let userLeft = false
        let userWatchingCatMeme = false
        
        if (userLeft) {
          reject({
            name: 'User Left', 
            message: ':(',
            // show : "Sorry"
          })
        } else if (userWatchingCatMeme) {
          reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
          })
        } else {
          resolve('Thumbs up and Subscribe')
        }
    })
}
watchTutorialCallback().then(message=>{
    console.log(message)}).then(message=>{
        console.log('success ' + message)}).catch(error=>{
        console.log(error.name, error.message)
    })
//     let userLeft = true
//     let userWatchingCatMeme = true
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':(',
//         show : "Sorry"
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }

//   watchTutorialCallback(message=>{
//     console.log(message)
//   }, message2=>{
//     console.log(message2.name, message2.message)
//   }
//   )
// //   watchTutorialCallback(message => {
// //     console.log(message)
// //   }, error => {
//     console.log(error.name + ' ' + error.message + ' '+error.show)
//   })