/* var ourArray = ["John", 23];
console.log(ourArray[0]);
*/
//var yourArray = [ ["Hohoho", "Popopo", "lol"], [23, 23,15], ["ABCD", 23, 23.5] ];
//console.log(yourArray);

//console.log(yourArray[0][1]);

//console.log(yourArray[2][2]);

//Summary
//Adding at last - push()
//Adding at start - unshift()
//Popping from last - pop()
//Popping from start - shift()

var friends = [];
friends.push("Ankit");
friends.push("Sumit");
friends.push("Amol");   //Adds at the last
console.log(friends);

var poppedFriend = friends.pop();   //Pops from the last
console.log(friends);

var shiftedFriend = friends.shift();    //Removes from the starting
console.log(friends);

friends.unshift(poppedFriend);      //Adds at the last
console.log(friends);