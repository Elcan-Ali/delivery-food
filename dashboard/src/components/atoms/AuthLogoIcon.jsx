import React from "react";
import AuthLogo from "../../assets/img/auth-logo.svg";

function AuthLogoIcon() {
  return (
    <img
      className="w-[45px] h-[42px] shrink-0 "
      src={AuthLogo}
      alt="Auth logo"
    />
  );
}

export default AuthLogoIcon;
