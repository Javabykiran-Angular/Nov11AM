//optional parameter function
//function with argument & without return type
function add(a, b) {
    console.log("Value of A is " + a); //4
    console.log("Value of B is " + b); //undefined
    console.log("Result is " + (a + b)); //NAN
}
//add(3,6);
// add(4)
// add();
//add(2,3);
//default parameter function
function add2(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of A is " + a); //
    console.log("Value of B is " + b); //
    console.log("Result is " + (a + b)); //
}
// add2(2);
function add3(a, b) {
    if (a === void 0) { a = 20; }
    console.log("Value of A is " + a); //
    console.log("Value of B is " + b); //
    console.log("Result is " + (a + b)); //
}
// add3(2,6);
// add3(1);
function add4(a, b) {
    if (b === void 0) { b = 90; }
    console.log("Value of A is " + a); //
    console.log("Value of B is " + b); //
    console.log("Result is " + (a + b)); //
}
// add4(1);
var temp4 = function (a, b) {
    if (b === void 0) { b = 80; }
    return (a + b);
};
console.log("\n=================================\nMultiplication is " + temp4(3) + "\n");
