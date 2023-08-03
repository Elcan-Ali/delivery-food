import React, { useState } from "react";
import AuthEyeClose from "../../../assets/img/auth-eye-close.svg";
import AuthEyeCloseActive from "../../../assets/img/auth-eye-close-active.svg";
import "./AuthInput.css";

function AuthInput({ type, icon, placeholder, name, activeIcon }) {
  const [active, setActive] = useState(false);
  const focusHandler = () => {
    setActive(true);
  };
  const blurHandler = () => {
    setActive(false);
  };

  return (
    <div id="auth-input" className={`${active && "active"} w-full`}>
      <div className="flex items-center gap-[26px]">
        <img src={active ? activeIcon : icon} alt="icon" />
        <input
          onFocus={focusHandler}
          onBlur={blurHandler}
          className="bg-transparent outline-none"
          placeholder={placeholder.toUpperCase()}
          name={name}
          type={type}
        />
      </div>
      {type === "password" && (
        <img
          src={active ? AuthEyeCloseActive : AuthEyeClose}
          alt="auth-eye-close"
        />
      )}
    </div>
  );
}

export default AuthInput;
