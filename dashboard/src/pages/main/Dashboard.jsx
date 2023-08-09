import React, { useState } from "react";
import MainHeader from "../../components/molecules/main/MainHeader";
import MainSearch from "../../components/atoms/main/MainSearch";
import MainSearchAnything from "../../components/atoms/main/MainSearchAnything";

function Dashboard() {
    const [active, setActive] = useState(true)
    const isActive = (arg) => arg === "food" ? setActive(true) : setActive(false)
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut amet expedita rem recusandae numquam doloribus, iste esse eius sit exercitationem. Hic fugit itaque, quod earum delectus adipisci repellat eius culpa. Non modi laborum delectus, nobis quisquam obcaecati praesentium ipsum neque dicta blanditiis quo voluptatum illo explicabo? Neque, facere suscipit repellendus nulla veritatis reiciendis aliquam totam explicabo vitae perspiciatis facilis veniam recusandae, sint eaque ipsa praesentium voluptates necessitatibus. Animi, ullam ea? Corporis quisquam delectus vitae rem similique itaque accusamus eius? Nobis voluptatem dolorem autem assumenda facere aspernatur, rem reprehenderit aperiam at iste voluptas numquam nostrum cum est minima voluptate. Molestiae.</p>
            </div>
        </div>
    );
}

export default Dashboard;
