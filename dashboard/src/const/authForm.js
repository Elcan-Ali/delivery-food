import AuthEmail from "../assets/img/auth-email.svg";
import AuthEmailActive from "../assets/img/auth-email-active.svg";
import AuthPasswordActive from "../assets/img/auth-password-active.svg";
import AuthPassword from "../assets/img/auth-password.svg";

export const SingInInputs = [
  {
    icon: AuthEmail,
    activeIcon: AuthEmailActive,
    name: "email",
    type: "email",
    placeholder: "email",
  },
  {
    icon: AuthPassword,
    activeIcon: AuthPasswordActive,
    name: "password",
    type: "password",
    placeholder: "password",
  },
];
