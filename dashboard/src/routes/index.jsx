import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/main";
import AuthLayout from "../layouts/auth";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SingUp";
import Dashboard from "../pages/main/Dashboard";
import Orders from "../pages/main/Orders";
import LayoutWrapper from "../components/atoms/LayoutWrapper";
import Activity from "../pages/main/Activity";
import MealDetail from "../pages/main/MealDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LayoutWrapper />}>
        <Route path='/main' element={<MainLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='activity' element={<Activity />} />
          <Route path='meal/:slug' element={<MealDetail />} />
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<SignIn />} />
          <Route path='register' element={<SignUp />} />
        </Route>
      </Route>
    </>
  )
);
