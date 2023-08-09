import React from "react";
import AuthForm from "../../components/organism/AuthForm";
import {SingUpInputs, initialStateSingUp } from "../../const/authForm";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className='flex-center pb-[50px]'>
      <AuthForm
        title={"Sign Up To DaPay"}
        elements={SingUpInputs}
        buttonText={"Sign Up"}
        helperText={"Already Have An Account?"}
        helperLink={<Link to="/auth/login">Log In</Link>}

        initialState={initialStateSingUp}
      />
    </section>
  );
}

export default SignUp;
