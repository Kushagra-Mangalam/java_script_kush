import {Navbar} from "../components/Navbar"
import { SearchBox } from "../components/SearchBox";


const HomePage = () =>{
    return (
        <div>
            <SearchBox></SearchBox>
            <Navbar></Navbar>
            <h1>Homapage!</h1>
            
        </div>
    )
};

export {
    HomePage
};