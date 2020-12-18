"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, role) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.deptref = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n        ========Employee Details=============\n            First Name :: " + this.fname + "\n            Last Name :: " + this.lname + "\n            Salary :: " + this.salary + "\n            Role ::    " + this.deptref.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
