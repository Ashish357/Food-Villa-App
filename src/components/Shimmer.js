import React from 'react'

const Shimmer = () => {
  return (
    <div data-testid='shimmer' className="flex flex-wrap gap-7 justify-center mx-28">
      {Array(10)
        .fill("")
        .map((e, index) => (
          // <div key={index} className="w-60 h-64 bg-gray-400 rounded-md transition-transform transform hover:scale-95">
          //   <div className='bg-gray-50 rounded-lg m-2 h-2/4'></div>
          //   <div className='bg-gray-50 m-2 h-7'></div>
          //   <div className='bg-gray-50 m-2 h-6'></div>
          //   <div className='bg-gray-50 m-2 h-5'></div>
          // </div>
          <div className=" animate-pulse w-56 h-80" key={index}>
            <div className='bg-gray-400 rounded-lg m-2 h-2/4'></div>
            <div className='bg-gray-400 m-2 h-7 '></div>
            <div className='bg-gray-400 m-2 h-6 w-3/4'></div>
            <div className='bg-gray-400 m-2 h-5'></div>
          </div>
        ))}
    </div>
  )
}

export default Shimmer
