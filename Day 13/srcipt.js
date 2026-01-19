function add(a,b){
    return a + b
}
function calculate(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = add(a,b);
     document.getElementById("result").innerText="Result: " +sum;
}