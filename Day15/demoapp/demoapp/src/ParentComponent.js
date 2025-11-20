import { useState } from "react";
import ChildComponent from "./ChildComponent";


export default function ParentComponent() {
    let [n1, setN1] = useState("Rahul")
    let [n2, setN2] = useState("Adani")
   let [res, setRe] = useState("Education")

  function changeResult(v) {
        setRe(v)
    }

    return <div className="outline">
        Enter Your Name: <input type="text" onBlur={(e) => { setN1(e.target.value) }} />
        <br></br>
        Enter Your Email:<input type="text" onBlur={(e) => { setN2(e.target.value) }} />
   <p>Name Is : {n1}</p>
    <p>Email Is: {n2}</p>
    <p>Data Is: {res} </p>


        <ChildComponent f1={changeResult}
            name={n1} email={n2}></ChildComponent>
    </div>

}
