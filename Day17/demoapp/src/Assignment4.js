import { React, useState } from "react";
export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            username,
            password,

        );
        setSubmit(true);
    };
    return(
        <div>
         <h1>LOGIN</h1>
         <fieldset>
        <form>
         <label for="username"> User Name :</label>
        <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter A User Name" required />
        <label for="Password">Enter Password: </label>
        <input type="Password" name="Password" id="Password" value={password}
            onChange={(e) => setPassword(e.target.value) }
            placeholder="Enter Password" required />
            <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
            </button>
        </form>
        </fieldset>
        <div>
          {submit &&
          (<p>UserName : {username}<br></br>
          Password : {password}
          </p>)}
        </div>
        </div>
    ) 

}

