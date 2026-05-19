import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")

    let navigate = useNavigate()

    const handleRegister = () =>{
        let url = "http://localhost:5000/register"
        let userInfo = {firstname, lastname, email, password}
        console.log(userInfo)
        axios.post(url, userInfo)
        .then((response)=>{
            console.log(response)
            if(response.data.status == true){
              navigate("/signin")
            }else{
              console.log("Wrong Details")
              setmessage(response.data.message)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
      <h1>Register Page</h1>
      <p style={{color:"red"}}>{message}</p>
      <input type="text" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)} />
      <input type="text" placeholder="Last name" onChange={(e)=>setlastname(e.target.value)} />
      <input type="text" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
      <input type="text" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
