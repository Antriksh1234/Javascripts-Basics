function sayHello() {
    console.log("Hello");
}

function sayHelloTo(name) {
    console.log("Hello " + name);
}

function add() {
    return 10+15;
}

function add(a, b) {
    return a+b;
}

function addAndPrint(a, b) {
    console.log("Add and print");
    console.log(a+b);
}

addAndPrint(12, 13);
console.log("Out side function");
console.log(add(12,1));