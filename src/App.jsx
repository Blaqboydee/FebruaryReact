import { useState } from "react";
import Button from "./Button";
import Product from "./Product";
import "./App.css";
import nature from "./assets/nature.avif";
import Input from "./Input";

function App() {
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

  return (
    <div>
      {/* <h1>PRODUCTS</h1> */}
      {/* Passing props: img, name, desc, price */}
      {/* <Product
        img={nature}
        name="Cyxus"
        desc="Running Sneakers"
        price="$29"
      /> */}

      <Button
       text="Ife"
      classname="blue"
       dothis={sayHello}
      />

      <Button dothis={sayHi} text="Caroline" />

      <Button text="Hikmat" />

      <Input
        onchange={collectInputValue}
        type="text"
        placeholder="Input your name"
        name="username"
        
      />
      <Input
        onchange={collectInputValue}
        type="password"
        placeholder="Input your password"
        name="password"
      />
      <Input
        onchange={collectInputValue}
        type="email"
        placeholder="Input your email"
        name="email"
      />

      <button onClick={collectDetails}>Sumbit details</button>
    </div>
  );
}

export default App;
