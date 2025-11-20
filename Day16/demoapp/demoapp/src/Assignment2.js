
import {useEffect,useState} from "react";
export default function Counter(){
 let data="";
 let [count ,setCount]=useState(0);
  useEffect(() => {
        console.log('in useEffect ')
         setCount(count + 1)  
    }, { }); // [],[count]

    function handler(){
        setCount(count+1);
        console.log("count "+ count)
    }
   
 
  return (
        <>
        Counter = {count}
        <br></br>
        <button onClick={handler}>Click Me</button>
        </>
    )
}