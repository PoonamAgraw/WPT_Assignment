import { useState } from "react";
import Calculator1 from "./Calculator1";
export default function Calculator() {
    let [n1, setN1] = useState(" ");
    let [n2, setN2] = useState(" ");
    let [res, setRe] = useState("");

    function changeResult(v) {
        setRe(v);
    }

    return (
        <>
            Enter a number 1 <input type="text" onBlur={(e) => { setN1(e.target.value) }} />
            <br></br>
            <br></br>
            Enter a number 2 <input type="text" onBlur={(e) => { setN2(e.target.value) }} />
            <p>The Output is: {res}</p>
            <Calculator1 f1={changeResult} num1={n1}  num2={n2}/>
        </>
    );
}
