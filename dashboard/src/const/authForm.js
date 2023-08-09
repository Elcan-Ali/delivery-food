import AuthEmail from "../assets/img/auth-email.svg";
import AuthEmailActive from "../assets/img/auth-email-active.svg";
import AuthUser from "../assets/img/auth-user.svg";
import AuthUserActive from "../assets/img/auth-user-active.svg";
import AuthUserError from "../assets/img/auth-user-error.svg";
import AuthEmailError from "../assets/img/auth-email-error.svg";
import AuthPasswordError from "../assets/img/auth-password-error.svg";
import AuthPasswordActive from "../assets/img/auth-password-active.svg";
import AuthPassword from "../assets/img/auth-password.svg";

export const SingInInputs = [
  {
    icon: AuthEmail,
    activeIcon: AuthEmailActive,
    errorIcon: AuthEmailError,
    name: "email",
    type: "email",
    placeholder: "email",
    errorMessage: "There is no such user",
  },
  {
    icon: AuthPassword,
    activeIcon: AuthPasswordActive,
    errorIcon: AuthPasswordError,
    name: "password",
    type: "password",
    placeholder: "password",
    errorMessage: "Password must be at least 6 characters",
  },
];
export const SingUpInputs = [
  {
    icon: AuthUser,
    activeIcon: AuthUserActive,
    errorIcon: AuthUserError,
    name: "fullname",
    type: "text",
    placeholder: "fullname",
    errorMessage: "Fullname is invalid",
  },
  {
    icon: AuthEmail,
    activeIcon: AuthEmailActive,
    errorIcon: AuthEmailError,
    name: "email",
    type: "email",
    placeholder: "email",
    errorMessage: "There is no such user",
  },
  {
    icon: AuthPassword,
    activeIcon: AuthPasswordActive,
    errorIcon: AuthPasswordError,
    name: "password",
    type: "password",
    placeholder: "password",
    errorMessage: "Password must be at least 6 characters",
  },
];

export const initialStateSingIn = {
  email: "",
  password: "",
};

export const initialStateSingUp = {
  fullname: "",
  email: "",
  password: "",
};
