import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import useRestaurantData from '../utils/useRestaurantData';
import ButtonList from './ButtonList';
import Shimmer from './Shimmer';

const MainRestaurantList = () => {
    const { filteredRestaurants } = useRestaurantData();
    {
       return filteredRestaurants?.length === 0 ? (
        <div>
            <Shimmer />
        </div>
    ) : (
        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 mt-12'>
            <p className='font-extralight text-base'><span className='cursor-pointer'><Link to='/'>Home /</Link></span> <span className='text-[#02060c99]'>Offers</span></p>
            <h1 className='font-bold text-lg md:text-2xl pb-4'>Restaurants With Great Offers Near Me</h1>
            <div>
                <ButtonList />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap:6 xl:gap-8 mt-8" data-testid='res-list'>
                {/* You have to write logic for NO restraunt found here */}
                {filteredRestaurants?.length === undefined ? (
                    <>
                        <h1>No Restaurant Found</h1>
                    </>
                ) : (
                    filteredRestaurants && filteredRestaurants.map((restaurant) => {
                        return (
                            <Link
                                to={"/restaurant/" + restaurant.info.id}
                                key={restaurant.info.id}
                                className='md:pr-4'
                            >
                                <RestaurantCard {...restaurant.info} />
                            </Link>
                        );
                    }))}
            </div>
        </div>
    )
                }
}

export default MainRestaurantList