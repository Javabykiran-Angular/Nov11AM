
class AngularClass{
    
    constructor(private fname:string,private lname:string,public id:number){

    }

    display(){
        console.log(`
        ++++++++++++ Details +++++++++++++
            First Name :: ${this.fname}
            last name :: ${this.lname}
            Id         :: ${this.id}
        `);
    }
    
}

var obj=new AngularClass('Java','Kiran',8);
obj.display();