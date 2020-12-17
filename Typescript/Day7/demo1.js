"use strict";
// import {sub} from './mainSimpleclass';
exports.__esModule = true;
exports.add = exports.SimpleClass = void 0;
var SimpleClass = /** @class */ (function () {
    function SimpleClass(firstname, lastname, id) {
        this.fname = firstname;
        this.lname = lastname;
        this.id = id;
    }
    SimpleClass.prototype.getFname = function () {
        return (this.fname);
    };
    SimpleClass.prototype.display = function () {
        console.log("\n        ==============Details====================\n            First Name :: " + this.fname + "\n            last name :: " + this.lname + "\n            ID ::       " + this.id + "\n        ");
    };
    return SimpleClass;
}());
exports.SimpleClass = SimpleClass;
// var obj=new SimpleClass('Sumit','Raokhande',8);
// obj.display();
// console.log("Call getter Method "+obj.getFname());
function add(a, b) {
    return (a + b);
}
exports.add = add;
// console.log("Substraction is "+sub(5,2));
