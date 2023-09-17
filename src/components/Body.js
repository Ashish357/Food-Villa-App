import React, { useEffect, useState } from 'react'
import useRestaurantData from '../utils/useRestaurantData';
import { filterData } from '../utils/helper';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import FoodCarousel from './FoodCarousel';
import RestaurantCarousel from './RestaurantCarousel';
import ItemCarousel from './ItemCarousel';
import ButtonList from './ButtonList';
import ShimmerCursor from './ShimmerCursor';

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(10)
  const { carousel, allRestaurants, filteredRestaurants, setFilteredRestaurants, setAllRestaurants, restaurantCarousel, itemCarousel } = useRestaurantData();
  // console.log(allRestaurants);

  async function getRestaurantMore() {
    setLoading(true);
    try {
      const response = await fetch(
        'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update',
        {
          method: 'POST', // Use POST for fetching more restaurants
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers here
          },
          body: JSON.stringify({
            lat: 12.9715987,
            lng: 77.5945627,
            nextOffset: 'COVCELQ4KID4ruup+9+KczCnEzgD', // Use the correct nextOffset value
            // Other payload parameters if needed
            seoParams: {
              apiName: "FoodHomePage",
              pageType: "FOOD_HOMEPAGE",
              seoUrl: "https://www.swiggy.com/",
            },
            widgetOffset: {
              // Include your widgetOffset values here
              NewListingView_Topical_Fullbleed: '',
              NewListingView_category_bar_chicletranking_TwoRows: '',
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
            },
          }),
        }
      );
      const data = await response.json();
      //    console.log(data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
      if (allRestaurants) {

        let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

        setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        setAllRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
         if (page > 10) {
        getRestaurantMore();
      }
  }, [page]);


  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 15);
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  if (!allRestaurants) {
    return (
      <div>
    <ShimmerCursor />
    <Shimmer />
  </div>
      ) 
  }
  return allRestaurants.length === 0 ? (
    <div>
      <ShimmerCursor />
      <Shimmer />
    </div>
  )
    : (
      <>

        {/* 
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
     </div> 
     */}

        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
          {/* className=" bg-[#171a29]" */}
          {
            carousel && <FoodCarousel data={carousel} />
          }
        </div>

        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
          <ItemCarousel data={itemCarousel} />
        </div>

        <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />


        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-40 p-4'>
          <RestaurantCarousel data={restaurantCarousel} />
        </div>

        <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />


        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 '>
          <h1 className='font-bold text-2xl pb-4'>Restaurants with online food delivery</h1>
          <div>
            <ButtonList />
          </div>
          <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8" data-testid='res-list'>
            {/* You have to write logic for NO restraunt fount here */}
            {filteredRestaurants && filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className='pr-4'
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
          </div>
        </div>
  {Loading && <Shimmer/>}
      </>
    );
};

export default Body

//?-optional chaining
//reconciliation
//virtual dom
