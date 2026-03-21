// // const obj21 = {
// //   name: "Kanhu",
// //   age: 20,
// // };

// // let key4 = "name";
// // // console.log(obj.key);

// // // console.log(obj[key]);

// // // console.log(person.name);

// // // New code
// // const sum = (a, b) => a + b;
// // // console.log(sum(5, 3));

// // const obj11 = {
// //   "first name": "Kanhu",
// //   "user-id": 123,
// // };

// // // console.log(obj["first name"]);
// // // console.log(obj[user - id]);

// // // const obj = { a: 10, b: 20 };
// // // let key = "b";
// // // // output → 20
// // // console.log(obj[key]);

// // // const user = { name: "Kanhu" };
// // // let field = "name";

// // // console.log(user[field]); //

// // // let key = "age";
// // // let value = 21;

// // // let obj = {
// // //   [key]: value,
// // // };

// // // console.log(obj);

// // // Build object from array
// // // let keys = ["a", "b", "c"];
// // // let obj = {};

// // // // expected → { a: 1, b: 2, c: 3 }

// // // for (let i = 0; i < keys.length; i++) {
// // //   obj[keys[i]] = i + 1;
// // // }
// // // console.log(obj);

// // // const jonas = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   age: 23,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // // };

// // // console.log(
// // //   `${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is called ${jonas.friends[0]}`,
// // // );

// // const user = {
// //   name: "Kanhu",
// //   address: {
// //     city: "Kolkata",
// //     getCity() {
// //       return this.city;
// //     },
// //   },
// // };

// // console.log(user.address.getCity());

// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 2000,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriverLicense: true,

// //   calcAge: function () {
// //     console.log(this);
// //     return 2026 - this.birthYear;
// //   },
// // };

// // console.log(jonas.calcAge());

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀*/

// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // // console.log(calcAverage(3, 4, 5));

// // // let scoreDolphins = calcAverage(44, 83, 71);
// // // let scoreKoalas = calcAverage(25, 13, 49);
// // // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
// //   } else {
// //     console.log(`No one wins`);
// //   }
// // };

// // // checkWinner(scoreDolphins, scoreKoalas);

// // checkWinner(576, 111);

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 1.69,
//   height: 78,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 1.95,
//   height: 92,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBmi();
// john.calcBmi();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`,
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`,
//   );
// }

// // if (mark.bmi > john.bmi) {
// //   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// // } else if (john.bmi > mark.bmi) {
// //   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// // }
