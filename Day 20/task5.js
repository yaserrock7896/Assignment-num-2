// Multiplication table generator (function + loop)
function MulTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
}

MulTable(5);

// Simple Calculator using functions
function calculator(num1, num2, operator) {
    if (operator === "+") {
        console.log("Result:", num1 + num2);
    } else if (operator === "-") {
        console.log("Result:", num1 - num2);
    } else if (operator === "*") {
        console.log("Result:", num1 * num2);
    } else if (operator === "/") {
        console.log("Result:", num1 / num2);
    } else {
        console.log("Invalid operator");
    }
}
calculator(10, 50, "*");

// odd/even checker using function and loop
function oddEvenChecker(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i + " is Even");
        } else {
            console.log(i + " is Odd");
        }
    }
}
oddEvenChecker(20);

// Factorial calculator using function and loop
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("Factorial of " + n + " is: " + result);
}
factorial(5);

// Menu program using function and loop
function menuProgram() {
    const menu = ["Tea", "Coffee", "Juice"];
    for (let i = 0; i < menu.length; i++) {
        console.log((i + 1) + ". " + menu[i]);
    }
    const choice = 2; // Simulated user choice
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
// PRINT A NUMBER 1 TO 10 USING FUNCTION AND LOOP
function printNumbers(answer) {
    for (let i = 1; i <= answer; i++) {
        console.log(i);
    }
}
printNumbers(10);

// covert a normal function to an arrow function
const add = (x, y) => {
    return x + y;
};
console.log("Addition:", add(5, 10));
const greet = name => `Hello, ${name}!`;
console.log(greet("Yaser"));