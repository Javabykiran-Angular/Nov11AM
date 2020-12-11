// Operator

// airthematic(+,-,*,/,%) ,logical(&&,||,!=),
//  relational,bitwise(&,|,!,^,~),assignment operator(=),conditional,
//ternary operator(?:),pre/post incr(++a,a++),pre/post decre(--a,a--)

var a:number=2;
var b=3;

var res=a+b;

// console.log("Addition is :: "+res);

var res1=a>b?'Hi':'bye';
// console.log('Output is :: '+res1);

//Loop 
// if loop
var a1=23;
var a2=10;
// if(a1>=a2){
//     console.log("Condition is True...");
// }else{
//     console.log("Condition is False....");
// }

//While loop
var temp=5;

// while(temp!=0){
//     console.log("In While Loop "+temp);
//     temp--;
// }

// //do-while
// var temp2=4;
// do{
//     console.log("Value is "+temp2);
//     --temp2;
// }while(temp2!=0);

// for(var i=0;i<5;i++){
//     console.log("Value of I is "+i);
// }

//var - has global scope i.e. it access within that file

const pi=3.14;

//const - it has also global scope but its value is fixed once we assign

let j1;
//let - It has scope within the block {}

// for(let j=1;j<=5;j++){
//     console.log("Value of J is "+j);
// }
//console.log("j is "+j)

//switch

var choice:number=12;
switch(choice){
    case 1: //logic
            console.log("U r in Case 1");
            break;
    case 2: //logic
            console.log("U r in Case 2");
            break;
    default: console.log("U are in Default Case...");
}




