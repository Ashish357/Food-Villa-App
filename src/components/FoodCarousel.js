import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IMG_CDN_URL } from '../constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FoodCarousel = (carousel) => {
  // console.log(carousel.data.info[0].id)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <h2 className='font-bold text-2xl my-4'>Best offers for you</h2>
      <Carousel responsive={responsive}>
        {carousel.data.info.map((data) => (
          <div key={data.id} className='px-2 cursor-pointer'>
            <img
              src={IMG_CDN_URL+ data.imageId}
              className=" object-cover rounded-3xl"
              alt={`Image ${data.id}`}
            />
          </div>
        ))}
        </Carousel>
    </>
  );
};

export default FoodCarousel;
