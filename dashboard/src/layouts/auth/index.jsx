import React from "react";
import AuthPageWrapper from "../../components/organism/AuthPageWrapper";
import { Outlet } from "react-router-dom";
import AuthPanel from "../../components/organism/AuthPanel";

function AuthLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <AuthPageWrapper page={<Outlet />} />
      <AuthPanel />
    </div>
  );
}

export default AuthLayout;
