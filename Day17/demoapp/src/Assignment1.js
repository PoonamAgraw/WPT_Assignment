import {useEffect, useState,useRef} from "react";
export default function RefFunction(){
    let x = useRef();
    let y = 100;
    let [s1, sets1] =useState("");
    useEffect(() =>{
        x.current=20;
    },[])

    return (<div>
        <input type ="text" onChange={(e) =>{
            // x.current = e.target.value;
            x.current++
            sets1(e.target.value)     
               }}></input>
               <p>
                x={x.current}
<br></br><br></br>
                y ={y}    
                <br></br><br></br>   
               </p>
    </div>)
}