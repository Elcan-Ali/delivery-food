import React from "react";
import MainHeaderTitle from "../../atoms/main/MainHeaderTitle";

function MainHeader({ title }) {
  return (
    <div className='poppins'>
      <MainHeaderTitle>{title}</MainHeaderTitle>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default MainHeader;
