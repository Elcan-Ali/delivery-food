import React from "react";
import AuthLogoIcon from "../../atoms/LogoIcon";
import MainMenuItem from "../../atoms/main/MainMenuItem";
import MainEatlyLogo from "../../../assets/img/main-eatly-logo.svg";
import { mainMenuItems } from "../../../const/mainMenuItems";
import { nanoid } from "@reduxjs/toolkit";

function MainMenu() {
  return (
    <div id='main-navbar' className='py-[32px] w-[260px] px-[24px] bg-[#f9f9f9] manrope'>
      <header>
        <div className='flex items-center gap-[10px] border-b pb-[20px] px-[16px]'>
          <AuthLogoIcon />
          <img src={MainEatlyLogo} />
        </div>
        <nav className='gap-[12px] flex flex-col pt-[40px]'>
          {mainMenuItems.map((item) => (
            <MainMenuItem key={nanoid()} {...item} />
          ))}
        </nav>
      </header>
      <footer></footer>
    </div>
  );
}

export default MainMenu;
