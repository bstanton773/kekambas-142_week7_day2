// console.log('Hello this is the main.js')

// Day 2


//////////////
// Booleans //
//////////////

var myBool1 = true;
console.log(myBool1, typeof myBool1);

var myBool2 = false;
console.log(myBool2, typeof myBool2);

// Negating Booleans
console.log(!true);
console.log(!false);

// Converting to Booleans
// use the Boolean() constructor
var firstName = 'Brian';
console.log(Boolean(firstName)); // true - non empty strings evaluate to true

var emptyString = '';
console.log(Boolean(emptyString)); // false - empty strings are considered false

var someNumber = 55;
console.log(Boolean(someNumber)); // true - all non-0 numbers evaluate to true

var zeroNum = 0;
console.log(Boolean(zeroNum)); // false - all 0 numbers are false

// undefined and null will always be false
console.log(Boolean(undefined));
console.log(Boolean(null));

// Double Negation - common tactic for converting to bool
console.log(firstName);
// Use a single ! that gives us the opposite that we would get from passing into Boolean()
console.log(!firstName);
// Add a second ! to negate the original negation
console.log(!!firstName);

console.log(emptyString)
console.log(!emptyString);
console.log(!!emptyString);

// Chaining Booleans
console.log('Chainging Booleans:')
// In Python, 'and' and 'or' -- JS we use && and ||
console.log('with || or')
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('with && and')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Short Circuiting

function t1(){
    console.log('t1 is running');
    return true;
}

function t2(){
    console.log('t2 is running');
    return false;
}

function t3(){
    console.log('t3 is running');
    return true;
}

// When using the && operator, once an expression returns false, no following expressions are ran
// t1()&&t2()&&t3()

// When using the || operator, once something returns true, no following expressions are ran
t1()||t2()||t3()



///////////////////////
// Null vs Undefined //
///////////////////////

// undefined - means the variable was declared but not given a value aka undefined
// null - is a value and can be assigned to represent no value
var myUndefined1;
var myNull = null;
var myUndefined2 = undefined;

console.log(myUndefined1);
console.log(myNull);
console.log('types:\n')
console.log(typeof myUndefined1); // undefined
console.log(typeof null); // null is an object!

console.log('Equality check:\n')
console.log(myUndefined1 == myNull); // true
console.log(myUndefined1 === myNull); // false
console.log(myNull === null); // true

console.clear();

///////////////////
// Let and Const //
///////////////////

// variables declared with var can be redeclared - can be dangerous
var myCity = 'Chicago'
console.log(myCity);

var myCity = 'New York';
console.log(myCity);

// variables declared with let and const cannot be redeclared - saves us from ourselves

let myState = 'Illinois';
console.log(myState);

// let myState = 'California';
// console.log(myState);

const myCountry = 'USA'
console.log(myCountry);

// const myCountry = 'Ireland';
// console.log(myCountry);


// let - can be undefined and can reassign a value to a variable
// const - must have value on instantiation & cannot reassign a value once it is set!
let myFavColor = 'blue';
myFavColor = 'green';
console.log(myFavColor);

const myFavAnimal = 'dog';
// myFavAnimal = 'platypus';

// var - global scoped (function scoped if in function)
// let and const - block scoped

if (true){
    var testVar = 'test'; // var is globally scoped
    console.log('Inside Block:', testVar);
}
console.log('Outside Block:', testVar);


if (true){
    let testLet = 'test let'; // let is block scoped
    console.log('Inside Block:', testLet);
}
// console.log('Outside Block:', testLet); // Uncaught ReferenceError: testLet is not defined


if (true){
    let anotherEx = 'This is my example';
    console.log('Inside Block:', anotherEx);
    if (true){
        console.log('Nested Block:', anotherEx);
    }
}

// console.log('Outside Block:', anotherEx); // Uncaught ReferenceError: anotherEx is not defined


// const is also block-scoped
if (true) {
    const testConst = 'testing const';
    console.log('Inside:', testConst);
}

// console.log('Outside:', testConst) // Uncaught ReferenceError: testConst is not defined


// From now on, use let or const for variable declaration
console.log(myRandomVarName); // undefined due to "variable hoisting"

var myRandomVarName = 'random';

console.log(myRandomVarName);


// console.log(today); // ReferenceError: Cannot access 'today' before initialization

let today = 'Tuesday';
console.log(today);


////////////
// Arrays //
////////////

// Declaring
let people = ["Taylor Swift", "Harry Styles", "Beyonce", "Billie Eilish"];
console.log(people);
console.log(typeof people); // object

// Accessing
console.log(people[3])

console.log(people[-1]) // undefined - negative indices do not work

// Arrays have a built in .length property
console.log(people.length);

///////////////////
// Array Methods //
///////////////////

// arr.push(value) - add value to the end of the arr - returns new length
console.log(people)

let returnVal = people.push('Lady Gaga');
console.log(people);
console.log(returnVal);

// arr.pop() - will remove the last element from the arr and return that element
let popReturn = people.pop();
console.log(people);
console.log(popReturn);


const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
colors.pop()
colors.push('violet');
console.log(colors);

// arr.unshift(value) - will add the value to the beginning of the arr and return new lenght
console.log(people);

let unshiftReturn = people.unshift('Olivia Rodrigo');
console.log(people);
console.log(unshiftReturn);


// arr.shift() - will remove the first value from the arr and return that value
let shiftReturn = people.shift();
console.log(people);
console.log(shiftReturn);

// arr.indexOf(value) - will return the index of the value in the arr or -1 if not present
console.log(people.indexOf('Beyonce'));
console.log(people.indexOf('Bad Bunny'));

let nums = [10, 20, 15, 10, 12, 30, 20]

console.log(nums.indexOf(20));
console.log(nums.indexOf(20, 2));


// arr.forEach(callbackFn) - execute the callback function on each element and discard the return value

people.forEach(function(element){console.log(element)})

people.forEach(function(person){console.log(`${person} is a famous singer`)})

// Array Destructuring
// JS allows us to declare multiple variables at a time and assign them members of the array

console.log(people);

let [tswift, harry, bey, billie] = people;

console.log(tswift);
console.log(harry);
console.log(bey);
console.log(billie);


let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let [r, o, y] = rainbow;

console.log(r, o, y);

let finalFour = ['UConn', 'Purdue', 'Alabama', 'NC State'];

[team1, team2, team3, team4, team5] = finalFour;

console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);
console.log(team5);


// Rest Operator ...
console.log(rainbow);
let [red, orange, yellow, ...others] = rainbow;

console.log(others);


// arr.join(string_to_join_on)
console.log(people.join(', '))

let things = ['a', 'b', 'c'];

console.log(things.join('-'));

// Array Slicing
// Allows us to take a portion of the array by its indices. Original arr not modified
// arr.slice(start, end)

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
console.log(months);
console.log(months.slice());
console.log(months.slice(3));
console.log(months.slice(1, 4));
console.log(months.slice(-4))

// Array Splicing
// arr.splice(start, deleteCount, item1, item2, ..., itemN);

let fruits = ['apple', 'banana', 'peach', 'watermelon'];
console.log(fruits);

// Insert an item at an index position (assuming not beginning or end)
// To add 'pear' after banana in the fruits array:
// start - 2
// deleteCount - 0
// item1 - 'pear'
fruits.splice(2, 0, 'pear');
console.log(fruits); // original array has been modified


// Insert an item at index position and remove item as well
// To replace 'peach' with 'orange'
// start - 3
// deleteCount - 1
// item1 - 'orange'
fruits.splice(3, 1, 'orange');
console.log(fruits);


// Insert and/or remove multiple items
// Replace 'banana', 'pear', and 'orange', with 'kiwi', 'grapes', 'mango'

fruits.splice(1, 3, 'kiwi', 'grapes', 'mango');
console.log(fruits);

fruits.splice(3, 1, 'dragon fruit', 'lady finger bananas');
console.log(fruits);


/*
    Make an Array of your favorite foods (minimum 4). Then using the methods we have learned, add "Fried Tarantulas" to the end of the array, then add "Mokh Mchermel" to the front. Then, using a slice of the now modified array, print your original array of favorite foods without my additions.
*/
let favFoods = ["tacos", "burgers", "wings", "burritos"];
console.log(favFoods);
favFoods.push('Fried Tarantulas')
console.log(favFoods); 
favFoods.unshift('Mokh Mchermel');
console.log(favFoods); 
console.log(favFoods.slice(1, 5));

///////////////
// Functions //
///////////////


// Regular Functions


// Arrow Functions



// The Spread Operator ...

//////////////////
// Flow Control //
//////////////////

// Review ifs

// Ternary Operator

// Traditions For Loop

// For...of Loop

// For...in loop

// while loop

// do...while loop


// Switch Case


/////////////
// Objects //
/////////////


// Declaring


// Accessing 


// Deleting Keys


// Object Desctructuring


// Optional Chaining


// Nullish Coalesing Operator


// Object Equality


