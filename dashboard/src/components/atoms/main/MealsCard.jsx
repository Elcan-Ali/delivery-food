import './MealsCard.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import heart from "../../../assets/img/meal-card-heart.png"
import heartActive from "../../../assets/img/meal-card-heart-active.png"
import MealImage from "../../../assets/img/main-detail-img.png"
import star from '../../../assets/img/meals-card-star.svg'

function MealsCard({ name, price, rate, slugName }) {
    const [isFav, setIsFav] = useState(false)
    const setFavorite = () => {
        setIsFav(state => !state)
    }

    return (
        <div className='meal-card relative py-[20px] rounded-[27px] px-[12px] border'>
            <div className='meal-card-top pt-[5px]'>
                <Link to={`/main/meal/${slugName}`}>
                    <img className='w-[100%] h-[250px] object-contain' src={MealImage} alt="meal" />
                </Link>
                <div className='absolute left-[2px] p-[16px] top-[0px]'>
                    <img onClick={setFavorite} className='w-[33px]' src={isFav ? heartActive : heart} alt="heart" />
                </div>
            </div>
            <div className='meal-card-bottom px-[10px]'>
                <h3 className='text-color-4 text-[18px] font-semibold'>{name}</h3>
                <div className='manrope text-[13px]  flex items-center text-[#8E97A6]'>
                    <span className='mr-[5px]'>24min •</span>
                    <img src={star} alt="star" />
                    <span>{rate}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='font-bold pt-[10px] manrope'>
                        <span className='text-[20px]'>{price.slice(0, 3)}</span>
                        <span className='text-[14px] text-[#8E97A6]'>{price.slice(3)}</span>
                    </div>
                    <button className='bg-color-4 text-[#fff] text-[19px] rounded-[10px] h-[40px] w-[40px]'>+</button>
                </div>
            </div>
        </div>
    )
}

export default MealsCard