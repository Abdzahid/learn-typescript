"use strict";
let firstname = "abd";
firstname = "zahid"; // variable change through let reverse key
const batch = "batch 57";
//batch="batch 67";  value cannot change at any time in const
let abc;
console.log(abc);
let variable1;
let variable2;
let variable3;
if (variable1 == 1) {
    console.log("");
}
else if (variable2 == 0) {
    console.log("");
}
else {
    console.log("");
}
let x; // type annovation
x = "abd";
console.log(x);
let val = 53;
let name_1 = "hello" + val; //concatination(+)
console.log(name_1);
let fulname = `my name is ${firstname},${val},${name_1}`; // templetes literally it is easy to add multiple value
console.log(fulname);
//Operators:
let z = 2;
let y = 3;
let add = z + y;
let add1 = "xy" + x + y;
console.log("add:", add);
console.log("add:", add1);
//let sub = "z"-y; error
let sub = z - y;
console.log("sub:", sub);
let n = 5;
// increment operator
n += 5;
//decrement operator 
n -= 5;
//comparison
n = 5;
n == 5; // compare the value
n === 5; // check the data type and value compare
// logical
let num = 5;
console.log(num >= 5 && num < 10); //
console.log(num > 5 && num < 10); //
console.log(num >= 5 || num < 10); //
console.log(num > 5 || num < 10); //
console.log(!(num < 10)); //
console.log(!(num > 10)); // 
n = 6;
if (n % 2 == 0) {
    console.log("even");
}
else if (n % 3 == 0) {
    console.log("odd");
}
else {
    console.log("invalid");
}
