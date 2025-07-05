import { useState } from "react";

const App=()=>{
 
  const [searchText,setSearchText]=useState(()=>{
    const localvalue=localStorage.getItem("name-value");

    if(localvalue){
      return localvalue;
    }else{
    return 'arun'}
  });
    console.log(searchText);
    // setSearchText();
    const handleInputChange = (e) => {
      let name=e.target.value;
      // console.log(e);
      localStorage.setItem("name-value",name);
      setSearchText(name);
    };
 
  return (
  <div>
    <input
      type="text"
      value={searchText}
      onChange={handleInputChange}
    />
    <h2>{searchText}</h2>
  </div>
 ) 
}

export default App;