import React from "react";
import AuthPageWrapper from "../../components/organism/AuthPageWrapper";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthPanel from "../../components/organism/AuthPanel";

function AuthLayout() {


  const location = useLocation()
  const urls = ['/auth', "/auth/"]

  if (urls.includes(location.pathname)) {
    return <Navigate to="/auth/login" />
  }

  return (
    <div className='flex flex-col lg:flex-row items-start'>
      <AuthPageWrapper page={<Outlet />} />
      <AuthPanel />
    </div>
  );
}

export default AuthLayout;
