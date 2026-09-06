//DAY 3 PROJECT — LOGIN SYSTEM (promises)
// const logincheck = new Promise(function (resolve, reject) {

//     let username = "admin";
//     let password = 1234;

//     if (username === "admin" && password === 1234) {
//         resolve("Login successful");
//     } else {
//        reject("Invalid username or password");
//     }
// });
// logincheck.then(function (check) {
//         console.log(check);
//         return new Promise(function (resolve, reject) {
//             resolve("Account verified");
//         });
//     })
//     .then(function (checked) {
//         console.log(checked);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//PROJECT — BANK TRANSACTION SYSTEM
const logincheck = new Promise((resolve, reject) => {
    let Username = "admin";
    let Password = 1234;
    if (Username === "admin" && Password === 1234) {
        resolve("Login successful");
    } else {
        reject("Invalid username or password");
    }
});
let balance = 5000;
let amount = 1500;
logincheck
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve("Account verified");
    });
})
.then((result) => {
    console.log(result);
    if (balance >= amount) {
        return "Balance check successful";
    } else {
        throw "Insufficient balance";
    }
})
.then((result) => {
    console.log(result);
    balance = balance - amount;
    return "Transaction successful";
})
.then((result) => {
    console.log(result);
    console.log("Remaining balance:", balance);
})
.catch(function(error) {
    console.log(error);
});

// Project Practice — Hotel Booking System
const promises =new Promise((resolve,reject)=>{
    let name = "Hamza";
    let room = 203;
    if(name==="Hamza"&&room===203){
        resolve("Booking successful")
    }else{
        reject("Booking failed")
    }
})
let Room_price = 5000;
let Amount_paid = 5000;
promises.then((result)=>{
    console.log(result)
    return new Promise((resolve)=>{
        resolve("Room verified")
    })
})
.then((result)=>{
    console.log(result)
    if(Amount_paid>=Room_price){
        return "Payment successful"
    }else{
        throw"Insufficient payment"
    }
})
.then((result)=>{
console.log(result)
return "Booking confirmed"
})
.then((result)=>{
    console.log(result)
    console.log("Enjoy your stay!")
})
.catch((error)=>{
    console.log(error)
})
