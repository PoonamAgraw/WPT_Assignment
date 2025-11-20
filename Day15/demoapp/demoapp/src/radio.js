import { useState } from "react";
import Radio1 from "./radio1";


export default function Radio() {
    let [n1, setN1] = useState(" ");
    let [res, setRe] = useState("");

    function changeResult(v) {
        setRe(v);
    }

    return (
        <>
            Enter a text <input type="text" onBlur={(e) => { setN1(e.target.value) }} />
            <p>The Output is: {res}</p>
            <Radio1 f1={changeResult} n1={n1} />
        </>
    );
}
