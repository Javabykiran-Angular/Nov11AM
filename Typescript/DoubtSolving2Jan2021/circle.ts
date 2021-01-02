import {Shape} from './shape';
export class Circle extends Shape {
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    MyArea(){
        this.area=this.radius*this.radius*3.14;
    }

    Display(){
        console.log(`
        ============Circle Area is ==================
            Whose radius is ${this.radius}
            & area is ${this.area}
        ===========================================
        `);
    }

}