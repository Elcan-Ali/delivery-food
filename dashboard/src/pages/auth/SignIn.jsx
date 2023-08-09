import React from "react";
import AuthForm from "../../components/organism/AuthForm";
import { SingInInputs, initialStateSingIn } from "../../const/authForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className='flex-center pb-[50px]'>
      <AuthForm
        title={"Sign In To DaPay"}
        elements={SingInInputs}
        buttonText={"Sign In"}
        helperText={"Create A New Account?"}
        helperLink={<Link to="/auth/register">Sign Up</Link>}
        initialState={initialStateSingIn}
      />
    </section>
  );
}

export default SignIn;
