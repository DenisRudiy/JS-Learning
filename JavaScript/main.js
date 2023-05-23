function onReload() {
  location.reload();
}

//  // Default and Arrow Function
// function calcAge1(birthYear) {
//   const age = 2023 - birthYear;
//   console.log(age);
// }

// const calcAge2 = function (birthYear) {
//   console.log(2023 - birthYear);
// };

// const calcAge3 = (birthYear) => console.log(2023 - birthYear);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirementAge = 65 - age;

//   return console.log(`${firstName} retires in ${retirementAge} years`);
// };

// yearsUntilRetirement(2003, "Denis");

// // Function Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges .`;
//   return console.log(juice);
// }

// fruitProcessor(3, 5)

// // Reviewing Functions

// const calcAge = function (year) {
//   return 2023 - year;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirementAge = 65 - age;

//   if (retirementAge > 0) {
//     return `${firstName} retires in ${retirementAge} years`;
//   } else {
//     return `${firstName} has already retired 🎉`; // Win + . to open emoji bar
//   }
// };

// console.log(yearsUntilRetirement(2003, "Denis"));
// console.log(yearsUntilRetirement(1956, "Alex"));

// // Code Challenge

// const calcAverage = (score_1, score_2, score_3) =>
//   (score_1 + score_2 + score_3) / 3;

// function checkWinner(d1, d2, d3, k1, k2, k3) {
//   const DolphinsAverage = calcAverage(d1, d2, d3);
//   const KoalasAverage = calcAverage(k1, k2, k3);

//   if (DolphinsAverage > KoalasAverage) {
//     return `The dolphins win by getting ${DolphinsAverage} 🎉`;
//   } else if (KoalasAverage > DolphinsAverage) {
//     return `The koalas win by getting ${KoalasAverage} 🎉`;
//   } else {
//     return `The draw 🐱‍👤`;
//   }
// }

// console.log(checkWinner(85, 54, 41, 23, 34, 27));

// Introduction to Arrays

const friends = ["Denis", "Alex", "Peter"];
console.log(friends);
