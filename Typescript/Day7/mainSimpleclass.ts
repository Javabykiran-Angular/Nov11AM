import {SimpleClass,add} from './demo1';
import {multi} from '../Myclass/test';

var obj=new SimpleClass('Java','ByKiran',9);
obj.display();

console.log("Addition is "+add(2,3));

// export function sub(a:number,b:number){
//     return (a-b);
// }

console.log("Multiplication is "+multi(2,3));