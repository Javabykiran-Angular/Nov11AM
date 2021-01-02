
export class Myclass{

   private fname:string;
    public  lname:string;
   protected id:number;

    constructor(firstname:string,lastname:string,id:number){
        this.fname=firstname;
        this.lname=lastname;
        this.id=id;
    }

    public Display(){
        console.log(`
            First Name:: ${this.fname}
            Last Name :: ${this.lname}
            ID        :: ${this.id}
        `);
    }

}

// var obj=new Myclass("Sumit",'Raokhande',9);
// obj.Display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;