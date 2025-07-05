import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState(["kiwi", "banana"]);
  console.log("new arr---->",arr);


  // const handleAddFruit = () => {
  //   arr.push("mango");
  //   console.log("arr:",arr);
  //   setArr(arr);
  // };
  const handleAddFruit = () => {
    // const temp=[...arr]; // we are making copy of array 
    // temp.push("mango")
    // console.log("arr:",temp);
    // setArr(temp);

    setArr((prev)=>{
      const temp=[...prev];
      temp.push("mango");
      console.log("temp:",temp);
      return temp;
    })
  };
  
  return (
    <div>
      <ul>
        {arr.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>
      <button onClick={handleAddFruit}>Add Mango</button>
    </div>
  );
};

export default App;
