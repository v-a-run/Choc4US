import React, { useState } from "react";
import InputField from "./InputField";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`firstName`, firstName);
    console.log(`lastName`, lastName);
    console.log(`email`, email);
    console.log(`password`, password);
    console.log(`mobile`, mobile);
  };
  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <InputField
          label="Last Name"
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputField
          label="Mobile (optional)"
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
