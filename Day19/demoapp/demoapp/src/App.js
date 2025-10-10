import react from "react";
import { BrowserRouter,Routes,Route,NavLink,Link,useNavigate } from "react-router-dom";
import Login from './Login';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import AppContext from "./Assignment2";

 const App1=()=>{
return (
// <BrowserRouter>

// <nav style={{backgroundColor:"red",justifyContent: "center",}}>
// </nav>
// <ul>
//   <li>
//      <NavLink to="/" >Home</NavLink>
//   </li>
//   <li>
// <Link to="/about" >About Us</Link>

//   </li>
//   <li>
// <Link to="/contact" >Contact Us</Link>
//   </li>
// <li>
// <Link to="/login" >Login</Link>
// </li>
// </ul>
// <div>
// <Routes>
//   <Route path ="/" element={<Home/>}></Route>
//   <Route path ="/about" element={<About/>}></Route>
//   <Route path ="/contact" element={<Contact/>}></Route>
//   <Route path ="/login" element={<Login/>}></Route>
//   </Routes>



// </div>
// </BrowserRouter>
<AppContext></AppContext>


)
 }
export default App1;



