import {Employee} from './employee';
import {Department} from './department';
export class EmployeeDetails implements Employee {
    fname: string;
    lname: string;
    salary:number;
     deptref:Department;
    constructor(fname:string,lname:string,salary:number,role:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        this.deptref=new Department(role);
    }

    display() {
        console.log(`
        ========Employee Details=============
            First Name :: ${this.fname}
            Last Name :: ${this.lname}
            Salary :: ${this.salary}
            Role ::    ${this.deptref.getRole()}
        `);
    }

}