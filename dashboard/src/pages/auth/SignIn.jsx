import React from "react";
import { SingInInputs, initialStateSingIn } from "../../const/authForm";
import { Link } from "react-router-dom";
import AuthForm from "../../components/molecules/auth/AuthForm";

function SignIn() {
  return (
    <section className='flex-center pb-[50px]'>
      <AuthForm
        title={"Sign In To DaPay"}
        elements={SingInInputs}
        buttonText={"Sign In"}
        helperText={"Create A New Account?"}
        helperLink={<Link to='/auth/register'>Sign Up</Link>}
        initialState={initialStateSingIn}
      />
    </section>
  );
}

export default SignIn;
