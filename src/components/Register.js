import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <label>Email</label>
      <input type="text" name="email" placeholder="Please enter email" />
      <br />
      <label>Password</label>
      <input type="text" name="password" placeholder="Please enter password" />
      <br />
      <button>Login</button>
    </div>
  );
};

export default Register;
