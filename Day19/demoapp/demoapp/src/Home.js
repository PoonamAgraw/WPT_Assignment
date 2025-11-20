import react from "react";
import Contact from "./Contact";
import { BrowserRouter,Routes,Route ,Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{textAlign:"center", maxWidth:"600px"}}>
            <h2 style={{backgroundColor:"red"}}>Home</h2> 
            <p style={{fontStyle:"italic"}}>Welcome To Home Page!</p>
        </div>

    )
}
export default Home;
