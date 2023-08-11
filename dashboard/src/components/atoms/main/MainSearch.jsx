import React from "react";
import search from "../../../assets/img/main-search.svg";

function MainSearch() {
  return (
    <div className='w-full mb-[20px] flex items-center px-[10px]  rounded-[10px] bg-[#f5f5f5]'>
      <img src={search} alt='search icon' />
      <input
        id='main-search'
        type='text'
        className='w-full text-[19px] p-[10px] h-[56px] bg-transparent outline-none'
        placeholder='Search'
      />
    </div>
  );
}

export default MainSearch;
