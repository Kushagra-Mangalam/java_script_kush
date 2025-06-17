// //arrow function assignment
// const printbill =(txt)=>{
//     console.log("---------------------");
//     console.log("Name: ", txt.name);
//     console.log("Amount: $ ", txt.amount);    
// }

// const calculateBillAmount = (price)=>{
//     return price*1.05;
// }

// const calculateClothes = (cloth)=>{
//     let gstOncloth=0.18;
//     let clothBill = cloth + (cloth * gstOncloth);
//     return clothBill;
// }
// let txt = { 
//     name: "Mango juice",
//     amount: 100,
//     cloth:200
// };
// if(txt.amount<100){
//     txt.amount=calculateBillAmount(txt.amount);
// }
// let clothAmount = calculateClothes(txt.cloth);
// printbill(txt);

// console.log("Cloth Amount: $", clothAmount);

const amountoffood =(txt)=>{
    let gstOnFood=0.05;
    let foodBill = txt + (txt * gstOnFood);
    return foodBill;
}


const amountofdrink =(txt)=>{
    let gstOnFood=0.05;
    let foodBill = txt + (txt * gstOnFood);
    return foodBill;
}


const amountofcloth =(txt)=>{
    let gstOnFood=0.05;
    let foodBill = txt + (txt * gstOnFood);
    return foodBill;
}

const printbillforcloth =(txt)=>{
    console.log("---------------------");
    console.log("amount of cloth is:");
    console.log("Amount: $ ", txt);    
}

const printbillforclothdrink =(txt)=>{
    console.log("---------------------");
    console.log("amount of cloth and drink is:");
    console.log("Amount: $ ", txt);    
}

const printbillforall =(txt)=>{
    console.log("---------------------");
    console.log("amount of cloth , drink and food is:");
    console.log("Amount: $ ", txt);    
}

const generateBill = (cloth, drink, food ,cb) => {
    const clothAmount = amountofcloth(cloth);
    const drinkAmount = amountofdrink(drink);   
    const foodAmount=amountofcloth(food);
    const totalamount=clothAmount + drinkAmount+foodAmount;

    cb(totalamount);
}

generateBill(100,200,300,printbillforall) ;
generateBill(100,0,300,printbillforclothdrink);