import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IMG_CDN_URL } from '../constants';

const ItemCarousel = (items) => {
    // console.log(items.data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <>
    <h2 className='font-bold text-2xl my-4'>Hey, what's on your mind?</h2>
      <Carousel responsive={responsive}>
        {items.data.map((data) => (
          <div key={data.id} className='pr-6 block cursor-pointer'>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${data.imageId}`}
              className="object-cover border-none"
              alt={`Image ${data.id}`}
            />
          </div>
        ))}
        </Carousel>
    </>
  )
}

export default ItemCarousel