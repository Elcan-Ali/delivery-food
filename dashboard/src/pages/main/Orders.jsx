import React from "react";
import MainHeader from "../../components/molecules/main/MainHeader";
import ChevronDown from "../../assets/img/chevron-left.png";
import OrderItem from "../../components/atoms/main/OrderItem";
import { nanoid } from "@reduxjs/toolkit";

function Orders() {
  return (
    <div>
      <div className='fixed poppins top-[26px] z-[99] bg-white w-[calc(100%-400px)]'>
        <MainHeader title={"Orders"} />
      </div>
      <img className='pt-[80px] pb-[20px]' src={ChevronDown} alt='chevron' />
      <div className='orders flex flex-wrap pt-[40px] gap-x-[20px] h-[75.5vh] overflow-y-auto gap-y-[20px]'>
        {Array.from({ length: 20 }).map((item) => (
          <OrderItem key={nanoid()} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
