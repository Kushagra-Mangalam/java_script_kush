import { useState } from "react"

const HomePage=()=>{
    const [entries,setEntries]=useState([]);

    const handleuser=(e)=>{
        e.preventDefault();
        // console.dir(e);
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
        })
    }


    console.log(entries);
    return (
        <div>
            <form onSubmit={handleuser}>
                <input type="text" name="username" placeholder="Enter name"></input>
                <br></br>
                <input type="text" name="city" placeholder="Enter city"></input>
                <br></br>
                <button>submit</button>
            </form>
            <div>
                <h3>Entries:</h3>
                <ul>
                    {entries.map(([username,city],idx)=>(
                        <div key={idx}>
                            <li>{username} - {city}</li>
                            <button onClick={()=>{
                                handleDelete(idx);
                            }}></button>
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