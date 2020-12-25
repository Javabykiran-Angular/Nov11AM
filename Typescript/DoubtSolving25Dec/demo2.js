//how to create function
function add(a, b) {
    return (a + b);
}
var temp = add(2, 3);
//console.log("Addition is "+temp);
//anonymous Function
var temp1 = function (a, b) {
    return (a + b);
};
// console.log("Addition is :: "+temp1(5,5));
//Fat arrow funtion/Arrow Function
var temp2 = function (a, b) {
    return (a + b);
};
//  console.log("Fat Arrow Function "+temp2(8,8));
//optional parameter function
var temp3 = function (num1, num2, num3, num4) {
    console.log("Value of Num1 is " + num1);
    console.log("Value of Num2 is " + num2);
    console.log("Result is is " + (num1 * num2)); //NAN
};
// temp3(2,3);
//Default Paramter Function
var temp4 = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log("Value of Num1 is " + num1);
    console.log("Value of Num2 is " + num2);
    console.log("Result is is " + (num1 * num2)); //NAN
};
// temp4(3);
// temp4(4,4);
var temp5 = function (num1, num2) {
    if (num1 === void 0) { num1 = 20; }
    console.log("Value of Num1 is " + num1);
    console.log("Value of Num2 is " + num2);
    console.log("Result is is " + (num1 * num2)); //NAN
};
// temp4(3);
//temp5(4,4);
temp5(5, 5);
temp5();
