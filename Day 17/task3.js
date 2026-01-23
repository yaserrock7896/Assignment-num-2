let Marks = 78
if (Marks >= 90) {
    console.log("Grade A");
} else if (Marks >= 75) {
    console.log("Grade B");
} else if (Marks >= 60) {
    console.log("Grade C");
} else if (Marks >= 50) {
    console.log("Grade D");
}       else {
    console.log("Grade F");
}

let userName = "Yaser";
let password = "mypassword123";

if (userName === "Yaser" && password === "mypassword123") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

let num1 = 10;
let num2 = 5;
let operator = "*";

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

let role = "developer";
switch (role) {
    case "admin":
        console.log("Admin has full access.");
        break;
    case "Support":
        console.log("Support has limited access.");
        break;
    case "Executive":
        console.log("Executive has Sales access.");
        break;
    case "developer":
        console.log("Developer has development access.");
        break;
    default:
        console.log("Invalid role");
}

let totalAmount = 3500;
let isMember = false;

if (totalAmount >= 5000) {
  console.log("20% discount applied");
} else if (totalAmount >= 3000 && isMember) {
  console.log("15% member discount applied");
} else if (totalAmount >= 2000) {
  console.log("10% discount applied");
} else {
  console.log("No discount available");
}