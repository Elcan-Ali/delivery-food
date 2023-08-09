import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function LayoutWrapper() {
  const location = useLocation();
  const mainUrls = ["/", "/main/", "/main"];
  const authUrls = ["/auth", "/auth/"];

  if (mainUrls.includes(location.pathname)) return <Navigate to='/main/dashboard' />;
  else if (authUrls.includes(location.pathname)) return <Navigate to='/auth/login' />;
  else return <Outlet />;
}

export default LayoutWrapper;
