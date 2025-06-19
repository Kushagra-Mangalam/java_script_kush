console.log("helo world")


//------------------------------------
//array for each 
// const number =[45,4,9,16,25];
// let txt="";
// number.forEach(myFunction);


// console.log(txt);
// function myFunction(a,b,c){
//     txt+=a+"\n";
// }

// console.log("hello")

// const number1=[45,4,9,16,25]
// const number2=number1.map(myFunction);

// // console.log(number2);
// document.getElementById("demo").innerHTML = number2;

// function myFunction(value,index,array){
//     return value *2;
// }

//-------------------------------------------------
//Map
// const number1 = [45, 4, 9, 16, 25];
// const number2 = number1.map(myFunction);
// document.getElementById("demo").innerHTML = number2;

// function myFunction(value, index, array) {
//     return value * 2;
// }



//--------------------------------------------------------------
//Flat map

// const myarr=[1,2,3,4,5,6];
// const newArr=myarr.flatMap((x,y,z)=>x*2);
// console.log(newArr);


//----------------------------------------------------------------
//Array Filter

// const numbers=[45,4,9,16,25];
// const over18=numbers.filter(myFunction);

// console.log(over18);
// function myFunction(value){
//     return value>18;
// }


//---------------------------------------------------------------
//reduce  //it takes 4 arguments the total(the initial value / previously returned value)
            //the item value
            //the item index
            //the array itself
// const number=[45,4,9,16,25,1];
// let sum=number.reduce(myFunction);  
// // let sum=number.reduce(myFunction,100); // reduce method can accept an intial value
// console.log(sum);

// function myFunction(total,value,index,array){
//     return total+value;
// }


//-----------------------------------------------------------------------
//Array Some  // this method checks if some array values pass a test 

// const number=[45,4,9,16,25]
// let someover18=number.some(myFunction);

// console.log(someover18);
// function myFunction(value){
//     return value>18;
// }

//--------------------------------------------------------------------------
//array from

// const myarray=Array.from("ABCDEFGhi");
// console.log(myarray);



