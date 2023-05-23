function onReload() {
  location.reload();
}

//             Default and Arrow Function
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  console.log(age);
}

const calcAge2 = function (birthYear) {
  console.log(2023 - birthYear);
};

const calcAge3 = (birthYear) => console.log(2023 - birthYear);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirementAge = 65 - age;

  return console.log(`${firstName} retires in ${retirementAge} years`);
};

yearsUntilRetirement(2003, "Denis");

// Function Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges .`;
  return console.log(juice);
}

fruitProcessor(3, 5);

//             Reviewing Functions

const calcAge = function (year) {
  return 2023 - year;
};

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;

  if (retirementAge > 0) {
    return `${firstName} retires in ${retirementAge} years`;
  } else {
    return `${firstName} has already retired 🎉`; // Win + . to open emoji bar
  }
};

console.log(yearsUntilRetirement2(2003, "Denis"));
console.log(yearsUntilRetirement2(1956, "Alex"));

//           Code Challenge

const calcAverage = (score_1, score_2, score_3) =>
  (score_1 + score_2 + score_3) / 3;

function checkWinner(d1, d2, d3, k1, k2, k3) {
  const DolphinsAverage = calcAverage(d1, d2, d3);
  const KoalasAverage = calcAverage(k1, k2, k3);

  if (DolphinsAverage > KoalasAverage) {
    return `The dolphins win by getting ${DolphinsAverage} 🎉`;
  } else if (KoalasAverage > DolphinsAverage) {
    return `The koalas win by getting ${KoalasAverage} 🎉`;
  } else {
    return `The draw 🐱‍👤`;
  }
}

console.log(checkWinner(85, 54, 41, 23, 34, 27));

//         Introduction to Arrays

const friends = ["Denis", "Alex", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(years[2]); // third item in list
console.log(years.length); // length of list
console.log(years[years.length - 1]); // last item of list

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2023 - 1991, "teacher", friends];
console.log(jonas);

//            Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
const popped = friends.pop(); // Delete last element
console.log(friends);
console.log(popped);

friends.shift(); // Delete first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

//           Code Challenge

bills = [125, 555, 44];

function calcTip(bills) {
  total = 0;
  for (let i = 0; i < bills.length; i++) {
    total += bills[i];
    if (50 < bills[i] < 300) {
      total += bills[i] * 0.15;
      console.log(bills[i] * 0.15);
    } else {
      total += bills[i] * 0.2;
      console.log(bills[i] * 0.2);
    }
  }
  return total;
}

console.log(calcTip(bills));

//                Objects

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2023 - 1991,
  job: "Software Developer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.firstName, jonas.age, jonas.friends);
console.log(jonas["job"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "Wat do you want to know about Jonas? Choose between firstName, lastName, age, job or friends"
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Jonas does not have a ${interestedIn} parameter`);
}

jonas.location = "Ukraine";
jonas["instagram"] = "@xxx";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//                Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Software Developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.getSummary());
console.log(jonas.age);
console.log(jonas["age"]);

//                  Coding Challenge

const mark = {
  name: "Mark",
  sName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: "John",
  sName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(
  `${
    john.bmi > mark.bmi
      ? `${john.name}'s BMI (${john.bmi.toFixed(1)})`
      : `${mark.name}'s BMI (${mark.bmi.toFixed(1)})`
  } if higher than ${
    john.bmi < mark.bmi
      ? `${john.name}'s BMI (${john.bmi.toFixed(1)})`
      : `${mark.name}'s BMI (${mark.bmi.toFixed(1)})`
  }!`
);
