import React from 'react'

const Buttons = (button) => {
  return (
    <div className='rounded-3xl bg-white border border-gray-300 m-2 p-3 inline-grid max-w-max grid-cols-1 gap-2 shadow-md transition duration-100 ease-in'>
        <p className='text-sm font-extralight cursor-pointer'>{button.data}</p>
    </div>
  )
}

export default Buttons