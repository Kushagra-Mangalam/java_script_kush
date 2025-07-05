import { useState } from "react"

const HomePage=()=>{
    const [entries, setEntries] = useState([]);
    // const [name, setName] = useState("");
    // const [city, setCity] = useState("");

    // const handleName = (e) => {
    //     // let val=e.target.value;
    //     setName(e.target.value);
        
    // };

    // const handleCity = (e) => {
    //     setCity(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (name && city) {
    //         setEntries([...entries, { name, city }]);
    //         setName("");
    //         setCity("");
    //     }else{
    //         alert("enter all values");
    //     }
    // };

    const handleuser=(e)=>{
        e.preventDefault();
        const username=e.target.username.value;
        const city=e.target.city.value;


        setEntries((kush)=>{
            const temp=[...kush];
            temp.push([username,city]);
            return temp;
        })

    }
    
    const handleDelete=(idx)=>{
        setEntries((prev)=>{
            const temp=[...prev];
            temp.splice(idx,1);
            return temp;
        });
    }

    console.log(entries);
    return (
        <div>
            <form onSubmit={handleuser}>
            <input type="text" name="username" placeholder="Enter name" />
            <br></br>
            <input type="text" name="city" placeholder="Enter City" />
            <br></br>
            <button> submit</button>
            {/* <button> delete</button> */}
            </form>
            <div>
                <h3>Entries:</h3>
                <ul>
                    {entries.map(([username, city], idx) => (
                        <div key={idx}>
                            <li>{username} - {city}</li>
                            <button onClick={()=>{
                                console.log(idx);
                                handleDelete(idx);
                            }}>delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export{
    HomePage
};