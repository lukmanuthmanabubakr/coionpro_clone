import React, { useState } from "react";
import "./PasswordInputComp.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const PasswordInputComp = ({ placeholder, value, onChange, onPaste, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="passwordInputComp">
      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          required
          name={name}
          value={value}
          onChange={onChange}
          onPaste={onPaste}
        />
      </div>
      <div className="icon" onClick={togglePassword}>
        {showPassword ? (
          <AiOutlineEyeInvisible className="eyeIcon" />
        ) : (
          <AiOutlineEye className="eyeIcon" />
        )}
      </div>
    </div>
  );
};

export default PasswordInputComp;
