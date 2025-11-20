import { useState } from "react";
import Data1 from "./Data1";


export default function Data() {
   let [n1, setN1] = useState("My name is Ram")
   let [res, setRe] = useState()

  function changeResult(v) {
        setRe(v)
    }

    return <div className="outline">
        Enter Your Data: <input type="text" onBlur={(e) => { setN1(e.target.value) }} />
        <br></br>
       
   <p>data Is : {n1}</p>
    <p>List Is: {res} </p>


        <Data1 f1={changeResult}
            data={n1} ></Data1>
    </div>

}
