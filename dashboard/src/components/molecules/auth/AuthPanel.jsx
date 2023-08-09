import React from "react";
import FoodImage from "../../../assets/img/food-image.svg";
import AuthPanelSquares from "../../../assets/img/auth-panel-square.svg";
import HalfDisc from "../../../assets/img/half-disc.svg";
import AuthChart from "../../../assets/img/auth-chart.png";
import XMiddle from "../../../assets/img/x-middle.svg";
import XSmall from "../../../assets/img/x-small.svg";
import AuthPanelMeal from "../../atoms/auth/AuthPanelMeal";

function AuthPanel() {
  return (
    <div
      id='auth-panel'
      className='transition-all lg:w-2/5 min-h-[100vh]  flex-center pt-[48px] flex-col bg-color-3'
    >
      <div className='relative mb-[66px]'>
        <img className='w-[250px] 2xl:w-[288px]' src={FoodImage} alt='food-image' />
        <AuthPanelMeal />
        <img
          className='hidden sm:block absolute w-[110px] 2xl:w-[159px] -bottom-[0] 2xl:-bottom-[30px] -left-[30px] 2xl:-left-[65px]'
          src={AuthChart}
          alt='auth-chart'
        />
        <img
          className='hidden sm:block absolute  w-[113px] -top-[100px] -left-[60px]'
          src={AuthPanelSquares}
          alt='auth-squares'
        />
        <img
          className='hidden sm:block absolute -bottom-[10px] -right-[60px] 2xl:right-[-80px]'
          src={HalfDisc}
          alt='half-disc'
        />
        <img
          className='hidden sm:block absolute -top-[100px] left-[40px]'
          src={XMiddle}
          alt='x-middle'
        />
        <img
          className='hidden sm:block absolute right-0 -top-[80px]'
          src={XSmall}
          alt='x-small'
        />
        <img
          className='hidden sm:block absolute -right-[20px] -top-[65px]'
          src={XMiddle}
          alt='x-middle'
        />
      </div>
      <div className=' px-[20px] 2xl:px-[50px] text-center manrope text-white '>
        <h3 className='text-[32px] xl:text-[36px] 2xl:text-[40px] leading-none mb-[20px] font-extrabold '>
          Find Foods With Love
        </h3>
        <p className='tracking-[.2px] text-[13px] 2xl:text-[14px] font-medium'>
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including
          Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders
          And Money.
        </p>
      </div>
    </div>
  );
}

export default AuthPanel;
