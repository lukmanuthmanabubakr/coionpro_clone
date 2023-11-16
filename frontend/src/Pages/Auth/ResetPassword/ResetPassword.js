import React, { useState } from "react";
import "../Login/Login.css";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import PasswordInputComp from "../../../Components/PasswordInputComp/PasswordInputComp";
import "./ResetPassword.css";

const initialState = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleInputPasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" && value.length > 0 && value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, confirmPassword: value });

    if (value.length > 0 && value !== password) {
      setConfirmPasswordError("Oops! Passwords do not match. Please check");
    } else {
      setConfirmPasswordError("");
    }
  };

  const loginUser = () => {};

  return (
    <div className="myLoginPage">
      <div className="myLogins">
        <NavLink to="/">
          <img src={coingLogos} alt="" />
        </NavLink>

        <p className="sign-in">Reset your password</p>

        <form onSubmit={loginUser} className="loginForm">
          {/* password */}
          <PasswordInputComp
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleInputPasswordChange}
          />
          <p>
            <span className="passwordError">{passwordError}</span>
          </p>
          {/* Confirm password */}
          <PasswordInputComp
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <p>
            <span className="passwordError">{confirmPasswordError}</span>
          </p>

          <button className="signInButton">Change password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
