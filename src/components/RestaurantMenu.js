import React from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { IMG_CDN_URL } from '../constants';
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import MenuCard from './MenuCard';
import MenuItems from './MenuItems';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  //check the names before destructuring
  const { resId } = useParams();
  const { restaurantInfo, restaurantMenu } = useRestaurantMenu(resId);


  if (!restaurantInfo || !restaurantMenu) {
    return <div>
      <Shimmer />
    </div>;
  }
  return (
    <div className=' max-w-[800px] mt-5 mx-auto'>
      <div className='max-w-[800px] h-8 text-xs text-[#93959f] flex items-center justify-between'>
        <div>
          <span className='mx-1 text-inherit'>Home</span>
          <span className='mx-1 text-inherit'>/</span>
          <span className='mx-1 text-inherit'>{restaurantInfo.name}</span>
        </div>
        <div className='flex cursor-pointer gap-4 pr-4'>
          <AiOutlineHeart size={23} />
          <AiOutlineSearch size={23} color='black' />
        </div>
      </div>
      <div className='my-0 mx-4 '>
        <div className='pt-4 mb-4 flex justify-between'>
          <div className='mr-4 inline-block'>
            {/* <h1>Restraunt id: {resId}</h1> */}
            <h1 className='text-xl font-bold mb-2 text-[#282c3f] capitalize'>{restaurantInfo.name}</h1>

            {/* <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} alt="food-image" /> */}
            <p className='text-sm text-[#93959f] '>{restaurantInfo?.cuisines.join(", ")}</p>
            <p className='text-sm text-[#93959f]'><span>{restaurantInfo?.areaName} </span><span>{restaurantInfo?.sla?.lastMileTravel} km</span></p>
          </div>
          <button className='p-2 border border-[#e9e9eb]'>
            <h3 className='text-[#3d9b6d] pb-[10px] mb-2 border-b font-bold'>⭐{restaurantInfo?.avgRating}</h3>
            <h3 className='text-xs font-semibold text-[#8b8d97]'>{restaurantInfo?.totalRatingsString}</h3>
          </button>
        </div>
        <hr className='border-dotted' />
        <div className='flex gap-6 mt-2'>
          <h3 className='font-bold flex gap-3'>
            <svg className="" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
            {restaurantInfo?.sla?.deliveryTime} MINS</h3>
          <h3 className='font-bold flex gap-2'>
            <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
            {restaurantInfo?.costForTwoMessage}</h3>
        </div>
        <div className='hidden md:flex justify-between mt-2'>
          <p>50% off upto Rs 100</p>
          <p>Flat Rs 100 off</p>
          <p>Flat 20 % off</p>
          <p>20% off upto Rs 100</p>
        </div>
        {/* <div>
          Veg Only
        </div> */}
      </div>

      <div>
        {/* {console.log(restaurantMenu[1].card.card)}
        <MenuCard menu={restaurantMenu[1].card.card} /> */}
      </div>
      <div className='p-5'>
        {/* <h1>Restaurants</h1> */}
        <ul data-testid="menu">
          {
            restaurantMenu.map((item, index) => {
              if (item.card.card.title) {
                return <MenuItems ItemCards={item?.card?.card?.itemCards || item?.card?.card?.categories} key={index} categoryLength={item?.card?.card?.itemCards?.length || item?.card?.card?.categories?.length} title={item?.card?.card?.title} nestingLevel={0}/>
              }
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu