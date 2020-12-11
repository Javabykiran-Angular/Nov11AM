//Functions
//1 function without argument/parameter & without return type
//2 function with argument/parameter & without return type
//3 function without argument/parameter & with return type
//4 function with argument/parameter & with return type
function add1() {
    console.log("Addition is " + (2 + 3));
}
//add1();//it is called a function
//add2(4,5);
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
function add3() {
    return ('From Function');
}
function add4() {
    return (2 + 6);
}
// console.log("Value is "+add3());
// console.log("Addition is "+add4());
function add5(a, b) {
    return (a + b);
}
var res = add5(6, 6);
console.log('Result is ' + res);
