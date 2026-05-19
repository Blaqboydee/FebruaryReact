import axios from 'axios'
import React from 'react'

const UsersList = () => {
    const url = "http://localhost:5000/users"
    const handleDisplay = () =>{
        axios.get(url)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <h1>Users List</h1>
        <button onClick={handleDisplay}>Display Users</button>
    </div>
  )
}

export default UsersList