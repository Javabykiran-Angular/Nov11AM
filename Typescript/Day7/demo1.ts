// import {sub} from './mainSimpleclass';


export class SimpleClass{
    //property
   private fname:string;
   public lname:string;
   protected id:number;

    constructor(firstname:string,lastname:string,id:number){
            this.fname=firstname;
            this.lname=lastname;
            this.id=id;
    }

    getFname():string{
        return (this.fname);
    }

    public display(){
        console.log(`
        ==============Details====================
            First Name :: ${this.fname}
            last name :: ${this.lname}
            ID ::       ${this.id}
        `);
    }

}

// var obj=new SimpleClass('Sumit','Raokhande',8);
// obj.display();
// console.log("Call getter Method "+obj.getFname());

export function add(a:number,b:number){
    return (a+b);
}

// console.log("Substraction is "+sub(5,2));


