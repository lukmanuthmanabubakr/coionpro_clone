import React, { useState } from "react";
import "./Login.css";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import PasswordInputComp from "../../../Components/PasswordInputComp/PasswordInputComp";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [passwordError, setPasswordError] = useState("");

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
        <NavLink to="/"><img src={coingLogos} alt="coinprofile logo" /></NavLink>

        <p className="sign-in">Sign in to your account</p>

        <form onSubmit={loginUser} className="loginForm">
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
          {/* <input
            type="password"
            placeholder="Enter  password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
          /> */}

          <button className="signInButton">Sign in</button>

          <NavLink className="forgotPasswords" to="/reset">Forgot password?</NavLink>

          <NavLink className="theBlackGoogle">
            <p className="myG">G</p>
            <p>Sign in with Google</p>
          </NavLink>
        </form>

        <p className="accountDont">
          Don’t have an account? <NavLink to="/register">Create an account</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
