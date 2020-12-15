//Array
var a1 = [11, 12, 13, 14, 15];
var a2 = ['Angular 8', 'React js', 'Vue js'];
// for(let i=0;i<a1.length;i++){
//     console.log(` a1[${i}]= ${a1[i]}
//     ------------------------------- `);
// }
// console.log(a1);
// console.log(a1.join(' '));
// a1.forEach(
//     (value,i)=>{
//         console.log(`Value is a1[${i}] ${value}`);
//        /* 
//         console.log("value is a1["+i+"] "+value); */
//     }
//     );
//1 way Using LIFO principle
var a3 = [];
a3.push(44);
// console.log(a3);
a3.push(22, 33, 55);
// console.log(a3);
var temp = a3.pop();
// console.log(a3);
// console.log("Poped Value is "+temp);
var temp1 = a3.pop();
// console.log(a3);
// console.log("Poped Value is "+temp1); 
//2 way splice method
var a4 = [11, 12, 13, 14, 15];
// console.log(a4);
// a4.splice(2,0,44);
// console.log(a4);
// a4.splice(4,1);
// console.log(a4);
// a4.splice(1,1,55);
// console.log(a4);
// a4.splice(3,0,34,66,77);
// console.log(a4);
a4.splice(4, 2);
// console.log(a4);
//Rest parameter Function
function foo() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("----------------------------------\n               " + item + " \n    -----------------------------------\n     ");
}
//  foo();
//  foo(4,5);
//  foo(6,7,8,9,10,23);
//slice method 
// 
var a5 = [11, 12, 13, 14, 15];
var res = a5.slice(1, 4);
console.log("Original array " + a5);
console.log("Copied array " + res);
var res1 = a5.slice(1);
console.log("=======================");
console.log("Original array " + a5);
console.log("Copied array " + res1);
