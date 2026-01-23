let num1 = 20;
let num2 = 10;
let operator = "+";

if (operator === "+") {
  console.log("Addition:", num1 + num2);
}

if (operator === "-") {
  console.log("Subtraction:", num1 - num2);
}

if (operator === "*") {
  console.log("Multiplication:", num1 * num2);
}

if (operator === "/") {
  console.log("Division:", num1 / num2);
}

let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

let score = 82;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else if (score >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

let choice = 2;

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

//print numbers from 1 to 20 using a for loop
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//check if a number is positive, negative or zero
let as = -5;
if (as > 0) {
    console.log("Positive number");
} else if (as < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
//calculate the factorial of a number using a for loop
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + " is " + factorial);
// find even numbers between 1 and 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}