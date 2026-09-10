// const promise = new Promise((resolve,reject) => {
//     resolve('ITS DONE');
// });
// promise.then((result)=>{
//     console.log(result)
// })
//1
// const promise = new Promise((resolve,reject)=>{
//     resolve("Login successful")
// })
// promise.then((data)=>{

//     console.log(data)
// })
//2
// const promise = new Promise((resolve,reject)=>{
//     reject("incorrect password")
// })
// promise.catch((data)=>{

//     console.log(data)
// })
//3
// const promise = new Promise((resolve,reject)=>{
//     resolve("Login successful")
// })
// promise.then((data)=>{

//     console.log(data)
// })
// .finally(()=>{
//     console.log("DONE Completed")
// })
//4
// const promise = new Promise((resolve,reject)=>{
//     reject("Payment failedl")
// })
// promise.catch((data)=>{

//     console.log(data)
// })
// .finally(()=>{
//     console.log("DONE Completed")
// })
//5
// const promise =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("login done")
//     }, 2000);
// })
// promise.then((data)=>{

//     console.log(data)
// })
// .finally(()=>{
//     console.log("DONE Completed")
// })
//6
// const promise = new Promise((resolve,reject)=>{
//     let passwordcheck = false;
//     if(passwordcheck){
//         resolve("correct")
//     }else{
//         reject("incorrect")
//     }
// })

// promise.then((result)=>{
//     console.log(result)
// })
// .catch((result)=>{
//     console.log(result)
// })
// .finally(()=>{
//     console.log("completed transaction")
// })

// const promise = Promise.resolve("Hello");

// promise.then((result) => {
//     console.log(result);
//     return "Welcome";
// })
//     .then((result) => {
//         console.log(result);
//         return "hamza";
//     })
//     .then((result) => {
//         console.log(result);
//     });
const weatherPromise = new Promise((resolve, reject) => {
  let isSunny = true; 

  if (isSunny) {
    resolve("The weather is great! Let's go to the beach."); 
  } else {
    reject("It is raining. Stay inside."); 
  }
});
weatherPromise
  .then((message) => {
    console.log("Success: " + message); 
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// const promise = new Promise((resolve)=>{
//     resolve(10);
// });
// promise
// .then(function (num){
//     return num + 5
// })
// .then(function (num){
//     return num * 2
// })
// .then(function (num){
//     return num - 10
// })
// .then(function (num){
//     console.log(num) 
// })
