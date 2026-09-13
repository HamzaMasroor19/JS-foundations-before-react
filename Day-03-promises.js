// let promise = new Promise((resolve, reject) => {
//     let success=false;
//     if(success){
//         resolve("Done");
//     }else{
//         reject("Not Done")
//     }
// })
// const promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Task completed!");
//     } else {
//         reject("Task failed!");
//     }
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// .then(result => console.log(result))
// .catch(error => console.log(error))
// console.log(promise)
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


// const weatherPromise = new Promise((resolve, reject) => {
//   let isSunny = true; 

//   if (isSunny) {
//     resolve("The weather is great! Let's go to the beach."); 
//   } else {
//     reject("It is raining. Stay inside."); 
//   }
// });
// weatherPromise
//   .then((message) => {
//     console.log("Success: " + message); 
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function(orderId) {

        console.log("Order ID:", orderId);

        return proceedToPayment(orderId);
    })

    .then(function(paymentInfo) {

        console.log(paymentInfo);

    })

    .catch(function(error) {

        console.log(error.message);

    });
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

