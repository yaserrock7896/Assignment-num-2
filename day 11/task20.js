// let age= 17;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }
// else {
//     console.log("You are not eligible to vote.");
// }
try{
let day=9;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        throw new Error("day is not in input")
        
        
}
}