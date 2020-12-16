//Object
//json Object => java script object notation
// its store key & value format
// core java map,hashmap in collection

var obj={
    "fname":'sumit',
    lname:'Raokhande',
    id:8,
    status:true
}
//parsing a data using dot operator

// console.log(` 
// ----------------------------------------
//     First Name :: ${obj.fname}
//     Last Name ::  ${obj.lname}
//     ID        ::  ${obj.id}
//     Status     :: ${obj.status}
// ----------------------------------
// `);

//Using Square Bracket notation

// console.log(` 
// ----------------------------------------
//     First Name :: ${obj['fname']}
//     Last Name ::  ${obj['lname']}
//     ID        ::  ${obj["id"]}
//     Status     :: ${obj['status']}
// ----------------------------------
// `);



//Array of Object 

var arrobj=[
    {
        fname:'sumit',
        lname:'Raokhande',
        id:8,
        status:true
    },
    {
        fname:'Kiran',
        lname:'Raokhande',
        id:6,
        status:false
    },
    {
        fname:'Spruha',
        lname:'Raokhande',
        id:3,
        status:true
    }
];

// console.log(`
// -----------------------------------
// First name :: ${arrobj[1].fname}
// Last name   :: ${arrobj[1].lname}
// Id ::           ${arrobj[1].id}
// `)

// for (let i = 0; i < arrobj.length; i++) {
//     console.log(`
//     -----------------------------------
//     First name :: ${arrobj[i].fname}
//     Last name   :: ${arrobj[i].lname}
//     Id ::           ${arrobj[i].id}
//     `) 
// }



// for (let i = 0; i < arrobj.length; i++) {
//     console.log(`
//     -----------------------------------
//     First name :: ${arrobj[i]['fname']}
//     Last name   :: ${arrobj[i]['lname']}
//     Id ::           ${arrobj[i]['id']}
//     ------------------------------------
//     `) 
// }



var arrobj1=[
    {
        fname:'sumit',
        lname:'Raokhande',
        id:8,
        status:true,
        address:{
            area:'ambegaon',
            city:'pune',
            state:'MH',
            pincode:411043
        },
        marks:[40,39,45,50],
        month:[
            {
                month1:'jan',
                week:['week1','week2','week3']
            },
            {
                month1:'Feb',
                week:['week1','week2','week3']
            },
            {
                month1:'March',
                week:['week1','week2','week3']
            }
        ]


    },
    {
        fname:'Kiran',
        lname:'Raokhande',
        id:6,
        status:false,
        address:{
            area:'ambegaon',
            city:'pune',
            state:'MH',
            pincode:411043
        },
        marks:[40,39,45,50],
        month:[
            {
                month1:'jan',
                week:['week1','week2','week3']
            },
            {
                month1:'Feb',
                week:['week1','week2','week3']
            },
            {
                month1:'March',
                week:['week1','week2','week3']
            }
        ]
    },
    {
        fname:'Spruha',
        lname:'Raokhande',
        id:3,
        status:true,
        address:{
            area:'ambegaon',
            city:'pune',
            state:'MH',
            pincode:411043
        },
        marks:[40,39,45,50],
        month:[
            {
                month1:'jan',
                week:['week1','week2','week3']
            },
            {
                month1:'Feb',
                week:['week1','week2','week3']
            },
            {
                month1:'March',
                week:['week1','week2','week3']
            }
        ]
    },
    
];

// console.log(`First Object data
// =============================
//         First Name :: ${arrobj1[0].fname}
//         Address ::   ${arrobj1[0].address.area}

// `);

// console.log(`First Object data
// =============================
//         First Name :: ${arrobj1[0].fname}
//         Address Area ::   ${arrobj1[0].address.area}
//         marks       :: ${arrobj1[0].marks.join(' ')}

// `);

console.log(`
    ++++++++++++++++++++++++++++++
    Month Array is ${arrobj1[0].month[0].month1}
    Month Array is ${arrobj1[0].month[0].week.join('  ')}
`)




