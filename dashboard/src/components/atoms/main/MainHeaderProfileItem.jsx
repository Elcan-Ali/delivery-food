import React from "react";
import Avatar from "../../../assets/img/main-header-fake-user.svg";
import ChevronDown from "../../../assets/img/chevron-down.svg";
function MainHeaderProfileItem() {
  return (
    <div className='h-[48px] bg-[#fafafa] p-[10px] rounded-full gap-[20px] flex items-center'>
      <img src={Avatar} alt='avatar' />
      <div className='flex gap-[22px] font-semibold items-center'>
        <h3>Alesia K.</h3>
        <img src={ChevronDown} alt='chevron' />
      </div>
    </div>
  );
}

export default MainHeaderProfileItem;
