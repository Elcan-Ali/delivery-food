import React, { useEffect, useState } from "react";
import MainHeader from "../../components/molecules/main/MainHeader";
import MainSearch from "../../components/atoms/main/MainSearch";

// import MainSearchAnything from "../../components/atoms/main/MainSearchAnything";
import getMeals from "../../services/getMeals";
import getRestaurants from "../../services/getRestaurants";
import { useDispatch, useSelector } from "react-redux";
import { Init } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import MealsCard from "../../components/atoms/main/MealsCard";

function Dashboard() {
    const dispatch = useDispatch()
    const { meals, restaurants } = useSelector(store => store.mainApi)

    const [active, setActive] = useState(true)
    const isActive = (arg) => arg === "food" ? setActive(true) : setActive(false)

    useEffect(() => {
        (async () => {
            const meals = getMeals()
            const restaurants = getRestaurants()
            Promise.all([meals, restaurants]).then(values =>
                dispatch(Init({ meals: values[0].data, restaurants: values[1].data }))
            )
        })()
    }, [])

    return (
        <div>
            <div className="fixed top-[26px] bg-white w-[calc(100%-400px)]">
                <MainHeader title={"Dashboard"} />
                <MainSearch />
            </div>
            <div id='dashboard-content' className="h-[96.3vh] poppins pt-[130px] pb-[20px]  w-full flex-col overflow-y-auto flex">
                <div className="flex justify-end">
                    <div className='inline-flex border-[2px] text-[16px]  font-medium border-color-3 my-[20px] overflow-hidden rounded-[14px]'>
                        <div onClick={() => isActive("food")} className={`main-search-query ${active && 'active'}`}>Food</div>
                        <div onClick={() => isActive("restaurant")} className={`main-search-query ${!active && "active"}`}>Restaurant</div>
                    </div>
                </div>
                {/* <MainSearchAnything /> */}
                <div className="flex flex-wrap gap-[26px] pt-[20px]">
                    {meals.map(item => <MealsCard key={nanoid()} {...item} />)}
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
