import React from 'react'
import FoodImage from "../../../assets/img/food-image.svg"


function AuthPanelMeal() {
    return (
        <div className='hidden sm:flex absolute h-[70px] w-full lg:w-[90%] xl:w-full pl-[10px] py-[5px] top-[-50px] left-[40%] lg:left-[28%] xl:left-[36%] 2xl:left-[40%] bg-[#fff] poppins items-center rounded-[16px]' >
            <img className='block lg:hidden  xl:block w-[60px] mr-[10px]' src={FoodImage} alt="food-image" />
            <div>
                <p className='font-semibold text-[18px]'>Chicken Hell</p>
                <p className='12px text-[12px] font-medium'>On The Way</p>
            </div>
            <span className=' absolute text-color-1 text-[12px] bottom-[10px] right-[17px]'>3:09 PM</span>
        </div>
    )
}

export default AuthPanelMeal