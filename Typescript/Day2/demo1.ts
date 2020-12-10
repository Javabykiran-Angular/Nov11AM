
//console.log("Hello World....");
/*
Block of comment
*/

var a1;
//data types - number(int,long,double,float),string(char,"" or ''),boolean(true & false),any,void 
// mises. undefine & null as value we can use

var a2:number=10; //forward declaration & defination
var str:string='Sumit Raokhande';

console.log("Value of a2 is "+a2);
console.log("value of str:: "+str);
var a3:number;
console.log("Value of a3:: "+a3);

var a4; //default data type is any

a4=4;
console.log("Value of a4 is "+a4);
a4='javabykiran';
console.log("Value of a4 is "+a4);
a4=true;
console.log("Value of a4 is "+a4);

//type assertion
var a5:any;
//it has 2 method to implement type assertion
//1 bracket syntax <>
//2 as syntax

//1 bracket syntax <>

var temp= (<string> a5);
//temp.

//as syntax

var temp2= (a5 as string);
//temp2.