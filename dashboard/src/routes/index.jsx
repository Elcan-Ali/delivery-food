import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/main";
import AuthLayout from "../layouts/auth";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SingUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>
    </>
  )
);
