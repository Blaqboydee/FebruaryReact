import React from 'react';

const user = {
  email : "email@mail.com",
  password: "password1234"
}

const Login = () => {
  return (
    <div>
      <input type="email" />
      <input type="password" />
    </div>
  )
}

export default Login