import React from "react";
import AuthForm from "../../components/organism/AuthForm";
import { SingInInputs, initialStateSingUp } from "../../const/authForm";

function SignIn() {
  return (
    <section className='flex-center pb-[50px]'>
      <AuthForm
        title={"Sign In To DaPay"}
        elements={SingInInputs}
        buttonText={"Sign In"}
        helperText={"Create A New Account?"}
        helperLink={"Sign Up"}
        initialState={initialStateSingUp}
      />
    </section>
  );
}

export default SignIn;
