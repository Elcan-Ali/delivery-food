import React, { useEffect, useState } from "react";
import MainHeader from "../../components/molecules/main/MainHeader";
import ChevronDown from "../../assets/img/chevron-left.png";
import { useParams } from "react-router-dom";
import getMeal from "../../services/getMeal";
import Meal from "../../assets/img/main-detail-img.png";
import star from "../../assets/img/meals-card-star.svg";
import fire from "../../assets/img/fire.svg";

function MealDetail() {
  const { slug } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getMeal(slug);
      setData(data.data);
    })();
  }, []);

  return (
    <div>
      <div className='fixed poppins top-[26px] z-[99] bg-white w-[calc(100%-400px)]'>
        <MainHeader title={"Dashboard"} />
      </div>
      <div className='pt-[80px] poppins'>
        <img src={ChevronDown} alt='back' />
        <div className='detail-content'>
          <div className='flex'>
            <div className='w-1/2 pt-[30px]'>
              <h3 className='text-[47px] font-medium text-color-4 leading-[1]'>
                {data.name}
              </h3>
              <h4 className='text-color-2 text-[18px]'>{data.restaurant?.name}</h4>
              <div className='text-color-2  manrope font-medium flex items-center gap-[10px] pb-[60px]'>
                <span>24min •</span>
                <span className='flex items-center gap-[6px]'>
                  <img src={star} alt='star' />
                  {data.rate}
                </span>
                <span className='flex items-center gap-[6px]'>
                  <img src={fire} alt='' />
                  {data.kcal}
                </span>
              </div>
              <h3 className='text-color-4 font-medium text-[17px] mb-[15px]'>
                Description
              </h3>
              <p className='text-color-2 text-[18px]'>{data.description}</p>
            </div>
            <div className='w-1/2 flex justify-center'>
              <img src={Meal} alt='meal' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
