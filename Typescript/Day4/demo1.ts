// Anonymous Function

var temp=function (){
    console.log("Anonymous function...");
}

// temp();

var temp1=function (a:number,b:number){
    return (a*b);
}

// console.log("Multiplication is "+temp1(3,4));

// Arrow Function/fat Arrow function
// It is advanced version of anonymo. funt.

var temp2= ()=>{
    console.log("U are in Fat arrow function.....");
}

temp2();

var temp3=(a:number,b:number)=>{
    return (a*b);
}
var a=10;
console.log(`
---------------Multiplication is -----------------------
                ${temp3(5,5)} 
                ${a}
-------------------------------------------------------
`);




