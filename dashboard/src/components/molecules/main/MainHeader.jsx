import React from "react";
import MainHeaderTitle from "../../atoms/main/MainHeaderTitle";
import Bell from "../../../assets/img/main-header-bell.svg";
import BellRed from "../../../assets/img/main-header-bell-red.svg";

import MainHeaderProfileItem from "../../atoms/main/MainHeaderProfileItem";
function MainHeader({ title }) {
  return (
    <div className='poppins flex justify-between pb-[18px] items-center w-full'>
      <MainHeaderTitle>{title}</MainHeaderTitle>
      <div className='flex items-center gap-[16px]'>
        <div className='bg-[#FAFAFA] relative w-[48px] h-[48px] rounded-full flex-center'>
          <img src={Bell} alt='bell' />
          <img className='absolute top-[10px] right-[8px]' src={BellRed} alt='bell-red' />
        </div>
        <MainHeaderProfileItem />
      </div>
    </div>
  );
}

export default MainHeader;
