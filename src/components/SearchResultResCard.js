import React from 'react'
// import { Link } from 'react-router-dom';

const SearchResultResCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwoMessage, aggregatedDiscountInfoV3 } = data;
  return (
    <div className=' bg-white py-5 cursor-pointer'>
      {/* <Link to='/' className='px-4 pb-2'> */}

      <div className='float-left pl-4'>
        <div className='w-[88px] h-24 float-left rounded-lg'>
          <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' + cloudinaryImageId} alt="Food-Image" className='w-full h-full rounded-lg' />
        </div>
      </div>
      <div className='flex pl-4 flex-col justify-center min-h-[108px]'>
        <p className='text-[#3e4152] font-semibold text-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
        <p className='flex text-sm text-[#696b79] font-medium mt-[6px]'><span>⭐ {avgRating}</span> <span className='pl-2'>{sla.slaString}</span> <span className='pl-2'>{costForTwoMessage}</span></p>
        <p className='mt-1 text-sm line-clamp-1 text-[#93959f]'>{cuisines.join(", ")}</p>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default SearchResultResCard