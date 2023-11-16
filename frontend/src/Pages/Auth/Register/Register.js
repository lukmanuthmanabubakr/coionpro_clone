import React, { useState } from "react";
import "../Login/Login.css";
import "./Register.css";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import blackGoogle from "../../../Asset/blackoG.png";
import PasswordInputComp from "../../../Components/PasswordInputComp/PasswordInputComp";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;
  const [passwordError, setPasswordError] = useState("");


  // const [Ucase, setUCase] = useState(false)
  // const [num, setNum] = useState(false)
  // const [sChar, setSChar] = useState(false)
  // const [passwordLength, setPasswordLength] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if(name === "password" && value.length>0 && value.length < 8){
      setPasswordError("Password must be at least 8 characters")
    }else{
      setPasswordError("")
    } 
  };

  const loginUser = () => {};

  return (
    <div className="myLoginPage">
      <div className="myLogins">
        <NavLink to="/">
          <img src={coingLogos} alt="coinprofile logo" />
        </NavLink>

        <p className="sign-in">Create an account</p>

        <form onSubmit={loginUser} className="loginForm">
        {/* <input
            className="emailInput"
            type="text"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={handleInputChange}
          /> */}
          <input
            className="emailInput"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={email}
            onChange={handleInputChange}
          />

          {/* password */}
          <PasswordInputComp
            placeholder="Enter  password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {passwordError && (
            <p className="passwordError">{passwordError}</p>
          )}
          {/* Confirm password */}
          {/* <PasswordInputComp
            placeholder="Confirm  password"
            name="password"
            value={confirmPassword}
            onChange={handleInputChange}
          /> */}
          

          <button className="signInButton">Create account</button>

          <NavLink className="forgotPasswords"></NavLink>

          <NavLink className="theBlackGoogle">
            <p className="myG">G</p>
            <p>Sign up with Google</p>
          </NavLink>
        </form>

        <p className="accountDont">
          Already have an account?<NavLink to="/login">Sign In</NavLink>{" "}
        </p>

        <p className="PrivacyPolicy">
          By creating an account, you accept our <NavLink>Terms of use</NavLink> and <NavLink>Privacy Policy</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;

// import React from 'react'
// import "./Register.css"

// const Register = () => {
//   return (
//     <div>Register</div>
//   )
// }

// export default Register
