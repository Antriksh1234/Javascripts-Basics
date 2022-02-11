var ourDog = {
    "name": "Cooper",
    "age": 5,
    "friends": ["Eveything!"],
    "does he drink milk": true
}

var yourDog = {
    name: "Tom",
    age: 10,
    friends: [],
    16: "I love 16"
}

console.log(ourDog);
console.log(yourDog);

//Dot notation
console.log("your dog's age is: " + yourDog.age);
console.log(ourDog.name);
console.log(ourDog["does he drink milk"]);  //if your property has osme space then use this syntax
var doesHeDrinkMilk = ourDog["does he drink milk"];
console.log(doesHeDrinkMilk);

console.log(yourDog["age"]);
console.log(yourDog[16]);

yourDog.bark = "woof";  //adds new property
console.log(yourDog);

delete yourDog.bark;
delete yourDog.friends; //delete a property
console.log(yourDog);

console.log(yourDog.friends);   //undefined