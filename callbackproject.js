//mini project of callback for practice
//Callback LOGINCHECKER
//separate function
// function checklogin(username,success,wrong){
//     let name = 'Hamza'
//     if(username==name){
//         success(username)
//     }else{
//         wrong(username)
//     }
// }
// function success(name){
//     console.log('valid username :',name)
// }
// function wrong(){
//     console.log('invalid username ')
// }
// checklogin('Hamza',success,wrong)
// in one function 
// function check(username,Callback){
//     let name ='Hamza'
//     if(username==name){
//         Callback('Success')
//     }else{
//         Callback('Wrong')
//     }
// }
// function showdata(display){
//     console.log(display)
// }
// check('Hamza',showdata)

// Age checker
// function agecheck(age,valid,invalid){
//     if(age >= 18){
//         valid()
//     }else{
//         invalid()
//     }
// }
// function eligible()
// {
//     console.log('the user age is valid')
// }
// function Ineligible()
// {
//     console.log('the user age is invalid')
// }
// agecheck(18,eligible,Ineligible)

//Calculater with callback
// function Calculation(a , b,operation){
//     operation(a , b)
// }
// function multiply(a ,b,){
//     let res = a * b
//     console.log('multi = ',res)
// }
// function Add(a ,b){
//     let res = a + b
//     console.log('Add = ',res)
// }
// function Sub(a ,b){
//     let res = a - b
//     console.log('Sub = ',res)
// }
// function divide(a ,b){
//     let res = a / b
//     console.log('divide = ',res)
// }
// Calculation(1 ,4 , multiply)
// this is one callback method
// function calculate(a, b, operation) {
//     let result;

//     if (operation === "add") {
//         result = a + b;
//     } else if (operation === "subtract") {
//         result = a - b;
//     } else if (operation === "multiply") {
//         result = a * b;
//     } else if (operation === "divide") {
//         result = a / b;
//     }

//     showResult(result);
// }

// function showResult(result) {
//     console.log("Result =", result);
// }

// calculate(10, 5, "add");
// calculate(10, 5, "multiply");

//Task Completion
// function taskcompletion(task , callback){
//     console.log(`Task : ${task}`)
//     callback(task)
// }
// function showtask(task){
//     console.log(`this ${task} is completed`)
// }
// taskcompletion('Callback js',showtask)
// taskcompletion('Reading',showtask)
// taskcompletion('Working',showtask)

//button with brower
let button = document.getElementById('btn')
function respond() {
    console.log('Button Click')
    
}
button.addEventListener('click',respond)