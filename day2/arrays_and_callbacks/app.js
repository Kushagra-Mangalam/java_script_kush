// const arr1=['tata','honda','mahindra','hyundai']
// console.log(arr);
// console.log(arr[0]);
// const arr2=['casio','timex','titan']


// const company2=arr1[1];
// console.log(company2);

// const [a,b,c,d,e] = arr1;
// console.log(b,a,c,d,e)


//-------------------------------

// const arr=['tata','honda','mahindra','hyundai'];

// // arr.push("toyota")
// arr.pop();

// arr.unshift("maruti")
// // arr.shift();
// // arr.splice(1,2,"suzuki","audi");//isme pehla number starting element hai or dusra kitne elements remove karna hai 
// arr.splice(1,0,"limo");
// const n=arr.slice(0,3);

// console.log(arr.slice(4))
// console.log(n);
// console.log(arr);

//-------------------------------------------------
// const arr=['tata','honda','mahindra','hyundai'];
// console.log(arr.indexOf('honda'));

//--------------------------------------

// const arr=[{name:"kush",city:"haridwar"},
// {name:"rachi",city:"rajasthan"},
// {name:"snehil",city:"delhi"}
// ]

// console.log(arr.indexOf({name:"kush", city:"haridwar"}))

//----------------------------

// if({name:"Raj"}=={name:"Raj"}){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const person ={
//     name:"Raj",
// };

// if(person==person){
//      console.log("true");
// }else{
//     console.log("false");
// }


// const person1={
//     name:"Raj",
// }
// const person2={...person1};

// if(person1==person2){
//      console.log("true");
// }else{
//     console.log("false");
// }

//-----------------------------------------

// const arr=["ab","bc","cd","de"];

// if(arr.includes("ab")){
//     console.log("present");
// }

//=-----------------------------------------

// const myfunc=(a,b,c,d)=>{ // here a is element , b is index , c whole array
//     // console.log(a,b,c,d);
//     if(a=='mn'){
//         return true;
//     }else{
//         return false;
//     }
// }
// const arr=["ab","xy","mn","pq"];
// const elem=arr.find(myfunc);
// console.log(elem);

//-----------------------------------------

// const myfunc=(a)=>{
//     // console.log(a,b,c);
//     if(a.name==='Kush'){
//         return true;
//     }else{
//         return false;
//     }
// }

// const arr1=[
//     {name:"Kush", city:"Haridwar"},
//     {name:"Rachi", city:"Rajasthan"},
// ]

// const elem=arr1.find(myfunc);
// console.log(elem);

//-----------------------------------------

// const myfunc=(a)=>{
//     // console.log(a,b,c);
//     if(a.name==='Kush'){
//         return true;
//     }else{
//         return false;
//     }
// }

// const arr1=[
//     {name:"Kush", city:"Haridwar"},
//     {name:"Rachi", city:"Rajasthan"},
// ]

// const elem=arr1.findIndex(myfunc); //here is the change
// console.log(elem);

//-----------------------------------------



const arr1=[
    {name:"Kush", city:"Haridwar",score:90},
    {name:"Rachi", city:"Rajasthan",score:9},
]

const myfunc=(elem)=>{
    if(elem.score>25){
        return {...elem,remark:"pass"};
    }else{
        return {...elem,remark:"fail"};
    }
}

const ressmap=arr1.map(myfunc);
console.log(ressmap);

