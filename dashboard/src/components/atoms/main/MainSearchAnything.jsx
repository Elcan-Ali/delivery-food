import React from "react";
import SearchAnything from "../../../assets/img/main-search-anything.svg";
function MainSearchAnything() {
  return (
    <div className='h-[100%] flex-center gap-[30px] flex-col'>
      <img className='w-[120px]' src={SearchAnything} alt='anything' />
      <h2 className='text-[#ACADB980] text-[30px] font-medium'>Search Anything</h2>
    </div>
  );
}

export default MainSearchAnything;
