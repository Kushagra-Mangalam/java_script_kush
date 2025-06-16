// let juice =50 ;
// let gstOnJuice=0.1;
// let fries=70;
// let gstOnFood=0.05;

// let juiceBill = juice+juice+gstOnJuice;
// let friesBill = fries+fries+gstOnFood;

// const finalBill= juiceBill + friesBill;
// console.log("Final Bill: ", finalBill);


// let age =22;
// console.log("age: " ,age);

// //function declaration
// function calculateBill(){
//     let gstOnJuice=0.1;
//     let juice= 50;
//     let juiceBill = juice+juice+gstOnJuice;
//     console.log(juiceBill);
// }

// console.log("MID");

// calculateBill();

// const result1=calculateBillcustom(100,200);
// printbill("Mango juice", result1);

// function printbill(name, amount){
//     console.log("---------------------");
//     console.log("Name: ", name);
//     console.log("Amount: ", amount);    
// }

// function calculateBillcustom(juice1,juice2){
//     let gstOnJuice=0.1;
//     // let juice= 50;
//     let juiceBill = juice1+juice2+gstOnJuice;
//     return (juiceBill);
// }


// function printbill(name, amount){
//     console.log("---------------------");
//     console.log("Name: ", name);
//     console.log("Amount: $ ", amount);    
// }

//----------------------------------------------------------------

let age =22;
console.log("age: " ,age);

//function declaration
function calculateBill(){
    let gstOnJuice=0.1;
    let juice= 50;
    let juiceBill = juice+juice+gstOnJuice;
    console.log(juiceBill);
}

console.log("MID");

calculateBill();

//named function expression
const printbill =function printbill(name, amount){
    console.log("---------------------");
    console.log("Name: ", name);
    console.log("Amount: ", amount);    
}
//annonymous function expression
const calculateBillcustom = function (juice1,juice2){
    let gstOnJuice=0.1;
    // let juice= 50;
    let juiceBill = juice1+juice2+gstOnJuice;
    return (juiceBill);
}
const result1=calculateBillcustom(100,200);
printbill("Mango juice", result1);


// function printbill(name, amount){
//     console.log("---------------------");
//     console.log("Name: ", name);
//     console.log("Amount: $ ", amount);    
// }


