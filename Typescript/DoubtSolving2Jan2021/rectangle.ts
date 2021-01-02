import{Shape} from './shape';
export class Rectangle extends Shape{
length:number;
breadth:number;
area:number;

constructor(l:number,b:number){
    super();
    this.length=l;
    this.breadth=b;
    this.area=0;
}

MyArea(){
    this.area=this.length*this.breadth
}

Display(){
    console.log(`
    =================Rectangle Area ============
    Whose Length  ${this.length} & breadth ${this.breadth}
    is area is ${this.area}
    `);
}


}