  import { useState } from "react";

export default function useUsers() {
  
  function sayHello() {
    alert("hello");
  }

   function sayHi() {
    alert("Hi");
  }


  const [userDetails, setUserDetails] = useState({
    username: "", 
    email: "", 
    password:""
  })

  const [users, setUsers] = useState([])


  function collectInputValue(e) {
    console.log(e.target.value);
    console.log(e.target.name);

    const name = e.target.name;
    const value = e.target.value;

    setUserDetails({...userDetails, [name]: value})

    
  }

  
  const collectDetails = () => {
    
    setUsers([...users, userDetails])
    
    console.log(users);
  }
  return {
    sayHello, 
    sayHi,
    collectInputValue,
    collectDetails,
    userDetails,
    users
  };
}

