function login(password){
    if(password == ""){
        throw new Error("password cannot be empty")
    }
    return "login Successful";
}
try{
 console.log(login(""));
}
catch(err){
    console.log("Error : ",err.message);
}

try {
    let age = 25;
    if(age < 18){
        throw new Error("Age to vote is gretater than 18");
    }
    console.log("Age : ",age);
}catch(err){
    console.log("error :", err.message);
}