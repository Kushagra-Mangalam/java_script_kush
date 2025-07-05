// import { useState } from "react";

// const App=()=>{
//   // let searchText="snehil";

//   const [monitor,remote] = useState(()=>{
//   const val=localStorage.getItem("counter-value");
//   if(val){
//     return parseInt(val);
//   }else{
//     return 0;
//   }
// });
// // console.log(monitor);

//   // remote("snehil");
//   const handleup=()=>{
//     remote((prev)=>{
//       const newValue=prev+1;
//       localStorage.setItem("counter-value",newValue);// this is to store value in local storage
//       return newValue;
//     })
//     // remote((prev)=> prev+1); //short form for return function 
//     console.log(monitor);
//   }

//   const handleDown=()=>{
//     remote((prev)=>{
//       const downvalue=prev-1;
//       localStorage.setItem("counter-value",downvalue);
//       return downvalue;
//     })
//   }

//   const reset=()=>{
//     // remote((prev)=>0);
//     remote(0);
//     localStorage.setItem("counter-value",0);
//   }

//   return (
//     <div>
//       {/* <h1>hello</h1> */}
//       {/* <input type="text" onKeyUp={handleSearch}></input> */}
//       <button onClick={handleup}>click me</button>
//       <button onClick={handleDown}>decrement</button>
//       <button onClick={reset}>reset</button>
//       <h2>hello {monitor}</h2>
//     </div>
//   )
// }

// export default App;