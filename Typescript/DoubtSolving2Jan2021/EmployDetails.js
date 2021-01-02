"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, role) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n       ======Employee Details =================\n       First Name is " + this.fname + "\n       Last Name is " + this.lname + "\n       Salary is " + this.salary + "\n       Department is " + this.dept.getRole() + "\n       ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
