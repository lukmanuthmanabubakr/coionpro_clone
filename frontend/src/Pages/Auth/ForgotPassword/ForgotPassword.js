import React, { useState } from "react";
import "../Login/Login.css";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import "./ForgotPassword.css"

const initialState = {
  email: "",
};

const ForgotPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = () => {};

  return (
    <div className="myLoginPage">
      <div className="myLogins">
        <NavLink to="/">
          <img src={coingLogos} alt="coinprofile logo" />
        </NavLink>

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
        <button className="signInButton">Send reset link</button>

        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

