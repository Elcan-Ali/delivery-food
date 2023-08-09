import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../../components/molecules/main/MainMenu";

function MainLayout() {
  return (
    <div className='flex min-h-[100vh]'>
      <MainMenu />
      <main className='pt-[26px] px-[70px] w-[calc(100%-260px)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
