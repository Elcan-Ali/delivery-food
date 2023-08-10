import React, { useEffect, useState } from "react";
import MainHeader from "../../components/molecules/main/MainHeader";
import MainSearch from "../../components/atoms/main/MainSearch";

import MainSearchAnything from "../../components/atoms/main/MainSearchAnything";
import getMeals from "../../services/getMeals";

function Dashboard() {
    const [active, setActive] = useState(true)
    const isActive = (arg) => arg === "food" ? setActive(true) : setActive(false)

    useEffect(() => {
        (async () => {
            console.log(await getMeals());
        })()
    }, [])

    return (
        <div>
            <div className="fixed top-[26px] bg-white w-[calc(100%-400px)]">
                <MainHeader title={"Dashboard"} />
                <MainSearch />
            </div>
            <div id='dashboard-content' className="h-[96.3vh] pt-[130px] pb-[20px]  w-full flex-col overflow-y-auto flex">
                <div className="flex justify-end">
                    <div className='inline-flex border-[2px] text-[16px]  font-medium border-color-3 my-[20px] overflow-hidden rounded-[14px]'>
                        <div onClick={() => isActive("food")} className={`main-search-query ${active && 'active'}`}>Food</div>
                        <div onClick={() => isActive("restaurant")} className={`main-search-query ${!active && "active"}`}>Restaurant</div>
                    </div>
                </div>
                {/* <MainSearchAnything /> */}

            </div>
        </div>
    );
}

export default Dashboard;
