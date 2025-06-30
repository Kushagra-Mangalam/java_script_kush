// import { useState } from "react";

// // const arr=["kiwi","banana","pineapple"];

// const FRUITS =[{
//   name:"kiwi",
//   color:"green",
//   price:600,
// },
// {
//   name:"Mango",
//   color:"yello",
//   price:30,
// },
// {
//   name:"Apple",
//   color:"red",
//   price:100,
// },
// {
//   name:"pomo",
//   color:"Maroon",
//   price:20,
// },
// ]
// const App=()=>{
//   const [editIndex , setEditIndex] = useState(-1);
//   const [fruits,setFruits]=useState(FRUITS);
//   // console.log("editindex",editIndex);

//   return (
//     <div>
//       {
//         fruits.map((elem,idx)=>{
//           return (
//             <div key={idx}>
//               {idx===editIndex? <input type="text"></input>:  <h1>{elem}</h1>}
              
             
//               <button onClick={()=>{
//                 setEditIndex(idx);
//               }}>Edit</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App;