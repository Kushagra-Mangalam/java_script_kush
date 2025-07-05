console.log("hello");

// const newDate=new Date("2025-06-21");

// console.log("newDate:", newDate);

let newDate=null;

const handleDateChange = (e)=>{
    newDate=new Date(e.target.value);
    console.log("new date:",newDate);
    const targetMilliseconds = newDate.getTime();
    console.log("Target Milliseconds: ",targetMilliseconds);
    const currentTimeinMilliseconds=Date.now();
    console.log("current time Milliseconds: ",currentTimeinMilliseconds);
    const diffinSeconds=(targetMilliseconds-currentTimeinMilliseconds)/1000;
    console.log("diffinseconds",diffinSeconds);


}