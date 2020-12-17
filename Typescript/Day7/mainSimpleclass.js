"use strict";
exports.__esModule = true;
var demo1_1 = require("./demo1");
var test_1 = require("../Myclass/test");
var obj = new demo1_1.SimpleClass('Java', 'ByKiran', 9);
obj.display();
console.log("Addition is " + demo1_1.add(2, 3));
// export function sub(a:number,b:number){
//     return (a-b);
// }
console.log("Multiplication is " + test_1.multi(2, 3));
