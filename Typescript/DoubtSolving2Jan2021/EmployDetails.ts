import { Department } from './department';
import {Employee} from './employee';

export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    dept:Department;

    constructor(fname:string,lname:string,salary:number,role:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        this.dept=new Department(role);
    }

    display() {
       console.log(`
       ======Employee Details =================
       First Name is ${this.fname}
       Last Name is ${this.lname}
       Salary is ${this.salary}
       Department is ${this.dept.getRole()}
       `);
    }


}