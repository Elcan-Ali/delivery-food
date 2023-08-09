import React from "react";
import { Outlet } from "react-router-dom";
import AuthPageWrapper from "../../components/molecules/auth/AuthPageWrapper";
import AuthPanel from "../../components/molecules/auth/AuthPanel";

function AuthLayout() {
  return (
    <div className='flex flex-col lg:flex-row items-start'>
      <AuthPageWrapper page={<Outlet />} />
      <AuthPanel />
    </div>
  );
}

export default AuthLayout;
