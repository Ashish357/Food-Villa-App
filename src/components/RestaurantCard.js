import React from 'react'
import { IMG_CDN_URL } from '../constants'

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
  aggregatedDiscountInfoV3
}) => {
  const discountHeader = aggregatedDiscountInfoV3?.header;
  const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;
  const shouldRenderDiscount = discountHeader && discountSubHeader;

  return (
    <div className='transition-transform transform hover:scale-95'>
      <div className='relative overflow-hidden rounded-lg'>
        <img className='rounded-2xl object-cover w-full h-full' src={IMG_CDN_URL + cloudinaryImageId} alt="food-image" />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to transparent '></div>
        {shouldRenderDiscount && (
          <h3 className='absolute bottom-1 left-3 font-bold text-white text-xl line-clamp-1'>
            {discountHeader} {discountSubHeader}
          </h3>
        )}
      </div>
      <div className='ml-3 mt-3'>
        <h2 className='font-semibold text-xl line-clamp-1'>{name}</h2>
        <h2 className='font-semibold text-l'>⭐ {avgRating}</h2>
        <h3 className='line-clamp-1'>{cuisines.join(", ")}</h3>
        <h4>{areaName}</h4>
      </div>
    </div>
  )
}

export default RestaurantCard