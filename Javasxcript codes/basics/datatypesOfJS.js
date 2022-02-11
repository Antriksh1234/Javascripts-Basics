//Printing hello world
console.log("Hello World");

//Comments in JS
/*
Multiline 
comment in JS
now I can write in multiple lines 
*/

//Single line comment

/************************New Section**************************/
//Data types in Javcascript-

// 1. undefined
var x;
console.log(x);

//2. null
var y = null;
console.log(y);

//3. boolean 
var bool = true;
console.log(bool);

//4. string
var myName = "Antriksh";
console.log(myName);

//5. symbol
var sym1 = Symbol("123");
console.log(sym1);

//6. number
var num = 4;
console.log(num);

//7. Object
var ourDog = {
    "name": "Cooper",
    "age": 5,
    "friends": ["Eveything!"]
}

console.log(ourDog);

//Exercise
var a;
var b = 2;
console.log(a); //undefined

a = 7;
console.log(a); //7

//String concatenation with +
let firstName = "Antriksh";
let lastName = "Telang";
let myFullName = firstName + " " + lastName;
console.log(myFullName);

//Get specfic character
let firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);    //Prints A because Antriksh starts with A

//Even this works
let firstCharacter = "ABC"[0];
console.log(firstCharacter);