// console.log("hello world");

// const cse94={
//     name:"kushagra",
//     address:"haridwar",
//     bloodgroup:"O+",
// };

// const cse18={
//     name:"Devansh",
//     address:"Delhi",
//     bloodgroup:"AB+",
// };

// console.log(cse94);


//---------------------------------------------------------------

// const cse94={
//     name:"kushagra",
//     address:"haridwar",
//     bloodgroup:"O+",
// };

// cse94.college="lpu";

// console.log(cse94);
// delete cse94.bloodgroup;
// console.log(cse94);


//--------------------------------------------------
// const person={
//     name:"kushagra",
//     height:1.6,
//     weight:60,
//     college:'lpu',
//     // getBMI:()=>{
//     //     console.log(person.weight,",",person.height);
//     // }

//     getBMI:function(){
//         console.log("Weight:",this.weight, "Height:",this.height);
//         let bmi=this.weight/(this.height**2);
//         console.log("BMI:",bmi.toFixed(2));
//         if(bmi<18.5){
//             console.log(this.name,"is : ","underweight");
//         }else if(bmi>18.5 && bmi<24.9){
//             console.log(this.name,"is :","Normal weight");
//         }else{
//             console.log(this.name,"is:","Overwight");
//         }
//     }// for using this keyword we have to put function keyword instead of arrow function
// };

// person.getBMI();

// const allkeys=Object.keys(person);
// console.log("All keys:",allkeys);

// const allvalues=Object.values(person);
// console.log("All values:",allvalues);

// const allenteries=Object.entries(person);
// console.log("All enteries:",allenteries);


// const person={
//     name:"kushagra",
//     height:1.6,
//     weight:60,
//     college:'lpu',
// };

// // const clg=person.college;
// // console.log(clg);

// const whichkey=prompt("enter the key you want to see:");
// const clg=person[whichkey];
// console.log(whichkey,":",clg);

//---------------------------------------------------------
// const person1={
//     name:"kushagra",
//     height:1.6,
//     weight:60,
//     college:'lpu',
// };

// const person2=person1;

// console.log(person1);
// person1.name="kushagra Mangalam"
// console.log(person2);


// //desctructuring systax
// const {weight , college}=person1;
// console.log("weight:",weight,"college: ",college);

//------------------------------------------

// const person1={
//     name:"kushagra",
//     height:1.6,
//     weight:60,
//     college:'lpu',
//     marks:{
//         evs:90,
//         english:95,
//     }
// };

// const person2={...person1};//spread operator 

// person2.name="hallo";

// person2.marks.evs=49;

// console.log("person1:",person1);
// console.log("person2:",person2);

//--------------------------------------
