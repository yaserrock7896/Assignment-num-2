const a = {
    name: "Yaser",
    age: 25,
    city: "chennai"

};
console.log(a);


let score = 0;
function incrementScore(){
    score += 1;
    console.log("Score:", score);
}
incrementScore();
incrementScore();
incrementScore();

const settings = {
  theme: "dark",
  notifications: true,
  language: "en"
};

console.log("App Settings:", settings);

let userName = "Yakub";     // string
let userAge = 22;          // number
let isLoggedIn = true;      // boolean
let userSkills = ["HTML", "CSS", "JavaScript"]; // array
let userAddress = null;    // null
let userEmail;             // undefined

console.log("String:", userName);
console.log("Number:", userAge);
console.log("Boolean:", isLoggedIn);
console.log("Array:", userSkills);
console.log("Null:", userAddress);
console.log("Undefined:", userEmail);