'use strict';

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

yearsUntilRetirement(2003, 'Denis');

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

console.log(yearsUntilRetirement2(2003, 'Denis'));
console.log(yearsUntilRetirement2(1956, 'Alex'));

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

const friends = ['Denis', 'Alex', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(years[2]); // third item in list
console.log(years.length); // length of list
console.log(years[years.length - 1]); // last item of list

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2023 - 1991, 'teacher', friends];
console.log(jonas);

//
//            Array Operations (Methods)
//

const friends = ['Michael', 'Steven', 'Peter'];
//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
const popped = friends.pop(); // Delete last element
console.log(friends);
console.log(popped);

friends.shift(); // Delete first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

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
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2023 - 1991,
  job: 'Software Developer',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);
console.log(jonas.firstName, jonas.age, jonas.friends);
console.log(jonas['job']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends'
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Jonas does not have a ${interestedIn} parameter`);
}

jonas.location = 'Ukraine';
jonas['instagram'] = '@xxx';
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//                Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'Software Developer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(jonas.getSummary());
console.log(jonas.age);
console.log(jonas['age']);

//                  Coding Challenge

const mark = {
  name: 'Mark',
  sName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: 'John',
  sName: 'Smith',
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

//                  For Loops

const jonas = [
  'Jonas',
  'Schmedtmann',
  2023 - 1991,
  'Software Developer',
  ['Michael', 'Peter', 'Steven'],
];
const types = [];

for (i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);

  types.push(typeof jonas[i]);
}
console.log(types);

console.log('\n', '---- STRING ONLY ----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('\n', '---- BREAK WITH NUMBER ----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}

//              Looping Backwards and Loops in Loops

const jonas = [
  'Jonas',
  'Schmedtmann',
  2023 - 1991,
  'Software Developer',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(` ------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ⛹️‍♂️`);
  }
}

//                        While Loops

let dice = Math.trunc(Math.random() * 6) + 1;
let count = 0;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`, dice);
  count++;
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6)
    console.log('\n', `----- You are win with after ${count} attempts 🏆`);
}

//                        Codding Challenge

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

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
1;
console.log(calcTip(bills));

//                    Using a Debugger

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);

//
//
//

//                       SCOPES

//
//
//

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      output = '!NEW OUTPUT';
    }
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Denis';
calcAge(1991);

//
//
//

//                    HOISTING

//
//
//

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Denis';
let job = 'student';
const year = 2003;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

//
//
//

//                      THIS KEYWORD

//
//
//

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log('\n', this);
    console.log(this.year);
  },
};
jonas.calcAge();

//
//
//

//                      Destructing Arrays

//
//
//

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '22:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, 'and', secondary);

[main, secondary] = [secondary, main];
console.log(main, 'and', secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, 'and', mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;

console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//
//
//

//                      Destructing Object

//
//
//

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//    Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//    Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//    Nested Object
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

//
//
//

//                     The Spread Operator(...)

//
//
//

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//    Using a (...)
const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);
console.log(...newGoodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//    Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//    Join 2 arrays
const mainTwoMenuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainTwoMenuCopy);

//    Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...letters);

const ingredients = [
  prompt("Lets's make pasta! Ingredient 1?"),
  prompt("Lets's make pasta! Ingredient 2?"),
  prompt("Lets's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//    Object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//
//
//

//                     Rest Pettern and Parameters

//
//
//

//    1) Destructing
//    SPREAD, cause on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//    REST, cause on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//    Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//    2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//
//
//

//                     && and || operators

//
//
//

console.log('\n', ' ---- OR ----');
//    Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('\n', ' ---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach', 'onion');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'onion');

//
//
//

//                     The Nullish Coalescing Operator (??)

//
//
//

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//    Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//
//
//

//                     Logical Assignment Operators

//
//
//

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//    OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
rest1.owner ??= '<ANONYMOUS>';
rest2.owner ??= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//
//
//

//                     Coding Challenge

//
//
//

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//    1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//    2.
const [gk, ...otherTeam] = players1;
console.log(gk, otherTeam);

//    3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//    4.
const players1Final = [...players1, 'Thiango', 'Coutinho', 'Perisic'];
console.log(players1Final);

//    5.
const { team1: t1, x: x, team2: t2 } = game.odds;
console.log(t1, x, t2);

//    6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

//    7.
t1 < t2 && console.log('Team 1 is more likely to win');
t1 > t2 && console.log('Team 2 is more likely to win');

//
//
//

//                     ALGORITHMS

//
//
//

//                  Binary algorithm

const list = [1, 2, 3, 5, 7, 9];
const item = 2;

document.querySelector('#find').addEventListener('click', function () {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.round((low + high) / 2);

    let guess = list[mid];

    if (guess == item) {
      console.log(mid);
      break;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
});

//                   Sorting by selection
const list = [4, 1, 2, 6, 3, 7, 5];

const smallestEl = function (l) {
  let smallest = l[0];
  for (let i = 1; i < l.length; i++) {
    if (l[i] < smallest) {
      smallest = l[i];
    }
  }
  return smallest;
};

document.querySelector('#find').addEventListener('click', function () {
  let newList = [];
  while (list.length !== 0) {
    let smallest = smallestEl(list);
    const deleted = list.splice(list.indexOf(smallest), 1);
    newList.push(deleted[0]);
  }
  console.log(newList);
});
