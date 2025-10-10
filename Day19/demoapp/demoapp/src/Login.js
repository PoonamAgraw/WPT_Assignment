import { useState,useEffect } from "react";
import { Navigator, useNavigate } from "react-router-dom";

let n1 = useNavigate ();
export default function Login (){
    const [uname,setUname] = useState("default");
    const [pass,setPass]=useState('');
    const [msg,setMsg]=useState('');

    function check(e){
        e.preventDefault ();
        if(validate){
            setMsg ("valid User");
            n1.push('/Home');
        }

    }
    useEffect(() => {
        console.log ("Use Effect");
    }
    
)
function validate(){
    return (a=='uname' && a== 'pass' );
}
return (
    <div style={{}}>
        <form onSubmit={check}>
            Enter UserName:<input type="text" value={uname} onChange={(e)=>{setUname (e.target.value)}}></input> 
            Enter Password:<input type="text" value={pass} onChange ={(e)=>{setPass (e.target.value)}} ></input>
            <input type = "text" value={submit}></input>
            </form>
    </div>
)
}

