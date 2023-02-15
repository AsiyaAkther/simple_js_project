let userName = prompt("User Name:");

let userValueOne = prompt("User value One:");
let userValueTwo = prompt("User value Two:");

userValueOne = parseInt(userValueOne);
userValueTwo = parseInt(userValueTwo);

const sumResult = userValueOne + userValueTwo;
const subResult = userValueOne - userValueTwo;
const mulResult = userValueOne * userValueTwo;
const divResult = userValueOne / userValueTwo;
const modResult = userValueOne % userValueTwo;

document.write("User Name: " + userName + "<br><hr>");
document.write("First Value: " + userValueOne + "<br>");
document.write("second Value: " + userValueTwo + "<br>");
document.write("The summation is: " + sumResult + "<br>");
document.write("The subtraction is: " + subResult + "<br>");
document.write("The multiplication is: " + mulResult + "<br>");
document.write("The division is: " + divResult + "<br>");
document.write("The modulus is: " + modResult);