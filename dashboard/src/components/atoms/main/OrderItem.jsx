import React, { useState } from "react";

import Meal from "../../../assets/img/main-detail-img.png";

function OrderItem() {
  const [count, setCount] = useState(0);
  const incCount = () => setCount((state) => state + 1);
  const decCount = () => {
    if (count > 0) {
      setCount((state) => state - 1);
    }
  };

  return (
    <div className='order-items pl-[10px] pr-[20px] rounded-[12px] shadow-md w-[calc((100%-20px)/2)]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={Meal} className='w-[100px] h-[100px]' alt='meal' />
          <div className='font-semibold '>
            <h3 className='text-[18px]'>Chicken Hell</h3>
            <h3>$12.99</h3>
          </div>
        </div>
        <div className='text-center'>
          <div className='flex items-center  gap-[10px] pb-[8px]'>
            <button
              onClick={decCount}
              className='w-[34px] rounded-[10px] text-[20px]  border-2 border-color-4 flex-center pb-[3px] h-[31px]'
            >
              -
            </button>
            <span className='flex-center w-[16px]'>{count}</span>
            <button
              onClick={incCount}
              className='w-[34px] rounded-[10px] text-[20px]  flex-center bg-color-4 pb-[3px] text-[#fff] h-[31px]'
            >
              +
            </button>
          </div>
          <span className='font-semibold text-color-4'>$38.97</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
