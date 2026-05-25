import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  useEffect(() => {
    getDashboard()
  }, [])

  let navigate = useNavigate()

  const getDashboard = ()  =>{
    let url = "http://localhost:5000/user-dashboard"
    let token = localStorage.token
    axios.get(url,{
      headers:{
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((response)=>{
      console.log(response)
      if(!response.data.status){
        localStorage.removeItem(token)
        navigate("/signin")
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <div>
        <h1>This is the Dashboard</h1>
    </div>
  )
}

export default UserDashboard