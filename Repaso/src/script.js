// 1.-
function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());

/**
 
 */

// 2.-
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

/**
 
 */

 // 3.-
function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);

/**
 
 */

// 4.-
function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);

/**
 
 */

 // 5.-
// Archivo counter.js
let counter = 10;
export default counter;


// Archivo index.js
import myCounter from './counter';

myCounter += 1;
console.log(myCounter);

/**
 
 */

// 6.-
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
    console.log(item);
}

for (let item of myLifeSummedUp) {
    console.log(item);
}

/**
 
 */

 // 7.-
console.log('I want pizza'[0]);

/**
 
 */

// 8.-
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));

/**
 
 */

// 9.-
JSON.parse();

/**
 
 */