import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const navigate = useNavigate()
    const handleLogin = () =>{
        let url = "http://localhost:5000/authenticate"
        let userCredential = {email, password}
        console.log(userCredential)

        axios.post(url, userCredential)
        .then((response)=>{
            console.log(response)
            if(response.data.status == true){
                navigate("/user-dashboard")
            }else{
                setmessage(response.data.message)
            }
        })
        .catch((error)=>{
            console.log(error, "an error occurred")
        })
    }
  return (
    <div>
        <h1>Sign In Page</h1>
        <p>{message}</p>
        <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleLogin}>Sign In</button>
    </div>
  )
}

export default SignIn