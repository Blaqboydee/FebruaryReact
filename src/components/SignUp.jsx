import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
    const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newdetails, setNewdetails] = useState({});

  const [editId, setEditId] = useState(null);


  useEffect(() => {}, [])


  const handleUserDetails = () => {
// const firstUser = {
//     username: "Adegoke",
//     email: "Adegoke@gmail.com",
//     password: "12345"
//   }

//   setUsers([...users, firstUser]);
//   localStorage.setItem("users", JSON.stringify(users))



    if (username === "" || email === "" || password === "") {
      alert("All fields are required");
    } else {
      const details = {
        id: Date.now(),
        username,
        email,
        password,
      };



      setUsers([...users, details]);
      localStorage.setItem("users", JSON.stringify(users))
     

      console.log(users);
      if (users.length == 0) return
    
      navigate("/login")
    }
  };

  // const deleteBtn = (idToRemove) => {
  //     const updatedUser = users.filter((user)=> user.id !== idToRemove )
  //     setUsers(updatedUser)
  // }

  // const deleteBtn = (id) => {
  //     users.splice(id, 2);
  //     setUsers([...users]);
  // }

  const editUser = (user, id) => {
    console.log(id);
    setEditId(id);
    setIsEditing((prev) => !prev);
    setEditingUser(user);
    setNewdetails(user);
    console.log(editingUser);

    console.log(user);
  };

  const Updateuser = () => {
    console.log(editId);

    const updatedUsers = [...users];

    updatedUsers.splice(editId, 1, newdetails);

    setUsers(updatedUsers);
  };

  const handleNewDetails = (e) => {
    console.log(e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setNewdetails({ ...newdetails, [name]: value });

    console.log(newdetails);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setusername(e.target.value);
        }}
        name="username"
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
        placeholder="password"
      />

      <button onClick={handleUserDetails}>Submit</button>

      <div>
        {users.map((user, id) => (
          <div key={id}>
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
            <button onClick={() => deleteBtn(id)}>Delete</button>
            <button onClick={() => editUser(user, id)}>Edit</button>
          </div>
        ))}

        {isEditing && (
          <div className="editForm">
            <h1>Edit Form</h1>
            <input
              type="text"
              value={newdetails.username}
              onChange={handleNewDetails}
              name="username"
            />
            <input
              type="email"
              value={newdetails.email}
              onChange={handleNewDetails}
              name="email"
            />
            <input
              type="password"
              value={newdetails.password}
              onChange={handleNewDetails}
              name="password"
            />

            <button onClick={Updateuser}>Update User</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
