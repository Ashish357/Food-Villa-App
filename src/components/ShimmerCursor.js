import React from 'react'

const ShimmerCursor = () => {
  return (
//     <div className="carousel-loading">
//   <div className="text-center">
//     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500 mx-auto"></div>
//     <img
//       src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
//       alt="ice-cream"
//       className="mx-auto mt-4"
//     />
//   </div>
//   <div className="text-center mt-4">Looking for great food near you...</div>
// </div>

    <div className='h-96 bg-[#171a29] flex flex-col items-center justify-center'>
        <div className='relative flex flex-col items-center'>
            <div className="absolute animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500 mx-auto"></div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
              alt="ice-cream"
              className='w-11 mt-3'
            />
        </div>
          <div className='text-white text-xl font-bold mt-6'>Looking for great food near you...</div>
    </div>
  )
}

export default ShimmerCursor