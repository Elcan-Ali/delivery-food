import React from "react";
import AuthLogoIcon from "../atoms/AuthLogoIcon";
import "./AuthPageWrapper.css";
function AuthPageWrapper({ page }) {
  return (
    <div
      id='auth-page-wrapper'
      className='border-r wrapper poppins w-full lg:w-3/5 h-[100vh] overflow-auto  py-[32px]   px-[48px] flex flex-col justify-between'
    >
      <header className='fixed w-[calc(60%-51px)] bg-[#fff] top-0 pt-[32px]'>
        <AuthLogoIcon />
      </header>
      <main className='pt-[70px]'>{page}</main>
      <footer>
        <div className='flex w-full justify-between'>
          <span className='text-[14px] text-color-1 '>Privacy Policy</span>
          <span className='text-[14px] text-color-1 '>Copyright 2022</span>
        </div>
      </footer>
    </div>
  );
}

export default AuthPageWrapper;
