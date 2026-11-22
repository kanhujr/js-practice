   "use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const italianFoods = new Set([
//   "pasta",
//   "gnocchi",
//   "tomatoes",
//   "olive oil",
//   "garlic",
//   "basil",
// ]);

// const mexicanFoods = new Set([
//   "tortillas",
//   "beans",
//   "rice",
//   "tomatoes",
//   "avocado",
//   "garlic",
// ]);
// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({starterIndex = 1, mainIndex, address, time}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]},
//         and ${this.mainMenu[mainIndex]} will be delivered to ${address}
//         at ${time}`);  
//   },
// };





// restaurant.orderDelivery({
//   time: "22.30",
//   address: "villa 42",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
// ;
// console.log(menu);


// Spread 

// const arr = [1,3,...[3,4]];

// //Rest, because on Left side of
// const [a,b,...others] = [1,2,3,4,5]
// // console.log(a,b,others); 

// // Function
// const add = function(...numbers){
//   // console.log(numbers);
//   let sum = 0;
//   for(let i = 0; i<numbers.length; i++){
//     sum += numbers[i];
//     console.log(sum)

//   }
  

// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23,5,7];
// add(...x);

// Callback function
// A function passed  as an argument into another function

// function greet(name,cb){
//    console.log("Hello " + name);
//    cb();
// }

// function bye(){
//    console.log("Hey bye there");
// }

// greet("Kanhu",bye)

// function greet(){
//    console.log("Kanhu");
// }

// function welcome(callback){
//    callback();
// }

// welcome(greet);

// function greet(name){
//    console.log("Hello " + name);
// }

// function welcome(callback){
//    callback("Kanhu");
// }

// welcome(greet);

// function display(){
//    console.log("Learning Javascript");
   
// }

// function process(callback){
//    callback();
// }

// process(display);

// function showResult(result){
//    console.log("Result", result);
// }

// function calculate(a,b,callback){
//    let sum = a + b;
//    callback(sum);
// }

// calculate(20,30,showResult);

// function displayMessage(message){
//    console.log(message);
   
   
// }

// function checkNumber(num, callback){
//   if(num % 2 === 0){
//    callback("Even Number");
//   }
//   else{
//    callback("Odd Number");
//   }
// }

// checkNumber(16,displayMessage);

// *************************************** //
// Higher Order function
// *************************************** //

// a function takes another function as an argument or return a function

// let nums = [10,20,30,40,50];

// nums.forEach(function(num){
//    console.log(num);
// })

// function greet(message){
//    console.log(message);
// }

// function execute(callback){
//    callback("Kanhu");
// }

// execute(greet);

// ******************************//
// Recursion 
// ******************************//

// function count(num){

//    if(num === 0){
//       return num;
//    }

//    console.log(num);
//    count(num-1);
   
// }

// count(5);