//Calculator Functions (add, subtract, multiply, divide)
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
}
console.log("Add: " + add(5, 3));          
console.log("Subtract: " + subtract(10, 4));
console.log("Multiply: " + multiply(6, 7));
console.log("Divide: " + divide(20, 5));

//Odd / Even Checker using functions
function oddEvenChecker(limit) {
    if (limit % 2 === 0) {
        console.log(limit + " is Even");
    } else {
        console.log(limit + " is Odd");
    }
}
oddEvenChecker(17);
oddEvenChecker(24);
//Area Calculator (circle, rectangle)
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
function areaOfRectangle(length, width) {
    return length * width;
}
console.log("Circle Area: " + areaOfCircle(5));          
console.log("Rectangle Area: " + areaOfRectangle(10, 4));

// Greeting App using user name
function greetUser(name) {
    console.log("Hello, " + name + "! Welcome to the Greeting App.");
}
greetUser("Yaser");
greetUser("Yakub");

// Simple Menu Program using functions

function menuProgram() {
    const menu = ["Tea", "Coffee", "Juice"];
    for (let i = 0; i < menu.length; i++) {
        console.log((i + 1) + ". " + menu[i]);
    }
    const choice = 3; 
    switch (choice) {
        case 1:
            console.log("You selected Tea");
            break;
        case 2:
            console.log("You selected Coffee");
            break;
        case 3:
            console.log("You selected Juice");
            break;
        default:
            console.log("Invalid choice");
    }
}
menuProgram();  

//Convert a normal function to arrow function

const mul = (x, y) => {
    return x * y;
};
console.log("Multiplication:", mul(5, 10));
    