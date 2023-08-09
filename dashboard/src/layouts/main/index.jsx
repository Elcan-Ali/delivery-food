import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../../components/molecules/main/MainMenu";

function MainLayout() {
  return (
    <div className='flex min-h-[100vh]'>
      <MainMenu />
      <main className='pt-[32px] px-[40px]'>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
