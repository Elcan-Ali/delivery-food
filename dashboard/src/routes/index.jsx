import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/main";
import AuthLayout from "../layouts/auth";
import SignIn from "../pages/auth/SignIn";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<MainLayout />}></Route> */}
      <Route path='/' element={<AuthLayout />}>
        <Route index element={<SignIn />} />
      </Route>
    </>
  )
);
