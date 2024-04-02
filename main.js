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


console.log(today); // ReferenceError: Cannot access 'today' before initialization

let today = 'Tuesday';
console.log(today);


////////////
// Arrays //
////////////

// Declaring


// Accessing


// Methods


// Destructuring


// Rest Operator ...


// Array Slicing

// Array Splicing


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


