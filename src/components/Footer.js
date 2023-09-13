import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='hidden md:flex min-h-[104px] bg-gray-200 mt-6 items-center justify-center '>
    <h1 className='md:w-72 md:mr-12 text-2xl font-extrabold my-auto lg:w-[408px] mr-24'>For better experience,download the Swiggy app now</h1>
    <div className='flex justify-center my-auto mx-2 h-16 gap-5'>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="googleplay" />
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore" />
    </div>
    </div>
    <footer className='mt-6 md:mt-0 bg-[#02060C] text-white py-12 px-8 md:px-56'>
      <div className='container grid grid-cols-1 text-center  md:grid-cols-4 gap-4 mx-auto'>

        <div className='md:col-start-1 col-end-auto row-start-1 row-end-5'>
          <h2 className='text-2xl font-bold'>Swiggy</h2>
          <h4 className='text-gray-300 my-4'>© 2023 made By Ashish</h4>
        </div>

        <div className='md-col-start-2'>
          <h2 className='text-lg font-bold'>Company</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                About
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Careers
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Team
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Swiggy One
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Swiggy Instamart
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Swiggy Genie
              </Link>
            </li>
            
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-bold'>Contact Us</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Help & Support
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Partner with us
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Ride with us
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
        
        <div className='md:col-start-3 md:-mt-24'>
          <h2 className='text-lg font-bold mb-4'>Legal</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Terms & Conditions
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Cookie Policy
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Privacy Policy
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
        <div className='md:col-start-4 md:row-start-1'>
          <h2 className='text-lg font-bold mb-4'>We deliver to:</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Bangalore
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Delhi
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Kolkata
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Mumbai
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Ahmedabad
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Pune
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
      </div>
    </footer>
    </>
    // <div>footer</div>
  );
}

export default Footer;
