var sum = 0;
console.log("Before changing it inside function sum: " + sum);
function addFive() {
    sum += 5;   //sum is global, hence it is being changed here
}

function timesThree() {
    sum *= 3;   //actual sum is being changed here
}

addFive();
timesThree();
console.log("After chagning values in functions sum (not passing): " + sum);

var num1 = 5;
console.log("Before passing it to the function num1: " + num1);
function addFiveToNum(num) {
    num += 5;   //Here the mapped copy is getting changed, original num1 is still 5
    //console.log(num1);    try it if you want, will print 5
}

addFiveToNum(num1);
console.log("After passing as arguement, num1: " + num1);