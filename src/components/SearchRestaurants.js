import React, { useState } from 'react'
import ItemCarousel from './ItemCarousel';
import { useEffect } from 'react';
import SearchSuggestionsCard from './SearchSuggestionsCard';
import { Link, Navigate, useNavigate, useNavigation, useSearchParams } from 'react-router-dom';
import SearchResults from './SearchResults';
import SearchResultResCard from './SearchResultResCard';
import { AiOutlineSearch, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

const SearchRestaurants = () => {
    const [searchText, setSearchText] = useState("");
    const [foods, setFood] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    const [searchByRes, setSearchByRes] = useState([])
    const [isDish, setIsDish] = useState("")

    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const searchName = searchParam.get('query')
    // console.log(searchName)

    const handleClick = (name, type) => {
        setSearchText(name)
        setIsDish(type)
    }
    useEffect(() => {
        getSearchItemFoods()
    }, [])

    const getSearchItemFoods = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9715987&lng=77.5945627');
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
        setFood(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log(searchText)
            // console.log(searchName)
            if (searchText.length >= 2) {
                getSearchSuggestions();
            } else {
                setSuggestions([]);
                navigate('/search');
            }
        }, 1000)
        return () => clearInterval(timer);
    }, [searchText])

    const getSearchSuggestions = async () => {
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchText}&trackingId=undefined`);

        const json = await data.json();
        // console.log(json?.data?.suggestions)
        setSuggestions(json?.data?.suggestions)
    }

    useEffect(() => {
        if (searchName != null && searchText.length > 1) {
            getSearchByRes();
            // getSearchByDish();
        }
    }, [searchName])

    const getSearchByRes = async () => {
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=${searchName}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bc9bbc65-5d8b-0aa5-bbdc-65b467e6afdb`)
        const json = await data.json();
        // let item = json?.data?.cards[1]?.groupedCard?.cardGroupMap
        // console.log(isDish)
        if (isDish === 'RESTAURANT') {
            // console.log(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT.cards)
            // setIsDish("Res");
            setSearchByRes(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT)
        }
        else {
            // console.log(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH.cards)
            // setIsDish("Dish")
            setSearchByRes(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH)
        }
    }

    const foodItems = foods.slice(0, 11)
    const getNameFromPopularCusines = (entityId) => {
        const startIndex = entityId.indexOf('=') + 1; // Find the index of '=' and add 1 to get the starting index.
        const endIndex = entityId.length; // The ending index is the length of the string.

        const extractedText = entityId.slice(startIndex, endIndex);

        // This will log "Pizza" to the console.
        // console.log(extractedText); 
        setSearchText(extractedText);
    }

    return (
        <>
            <div className='sticky top-20 left-0 pb-2 pt-12 bg-white z-2'>
                <div className='w-4/5 sm:w-3/4 h-12 xl:w-[860px] mx-auto border border-[#282c3f4d] border-b border-black'>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className='flex justify-center items-center w-full h-12'>
                            {
                                isDish && searchText &&
                                <Link to={'/search'}
                                    className="pl-2"
                                    onClick={() => {
                                        setSearchText("");
                                        setSearchByRes([]);
                                        setIsDish("");
                                    }}
                                >
                                    <AiOutlineLeft size={25} />
                                </Link>
                            }
                            <input
                                type="text"
                                className="w-full border-none outline-none font-medium px-4 leading-relaxed"
                                placeholder="Search for restaurants and food"
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            />
                            {
                                searchText == "" ? (
                                    <button
                                        className="p-2 m-2"
                                    >
                                        <AiOutlineSearch size={25} />
                                    </button>
                                ) :
                                    <Link
                                        to={'/search'}
                                        className="p-2 m-2"
                                        onClick={(e) => {
                                            setSearchText("")
                                        }}
                                    >
                                        <MdOutlineClear size={25} />
                                    </Link>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className='mx-12 sm:mx-20 md:mx-28 lg:mx-44 xl:mx-60 pt-3 pl-2'>
                {searchText === '' ?
                    <div>
                        <h1 className='font-extrabold text-[1.43rem] text-[#3d4152]'>Popular Cuisines</h1>
                        <div className="grid grid-cols-6 md:flex mt-2 pt-3 pr-4 pl-2 pb-6">
                            {
                                foodItems.map((foodItem) => (
                                    <div key={foodItem.id} className='pr-2 cursor-pointer' onClick={() => getNameFromPopularCusines(foodItem.entityId)}>
                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${foodItem.imageId}`}
                                            className="border-none"
                                            alt={`Image ${foodItem.id}`}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> : ("")
                }
                {searchText === "" || searchName === searchText ? ("") :
                    <ul>
                        {
                            suggestions.map((suggestion, index) => (
                                <li key={index}>
                                    <Link onClick={() => handleClick(suggestion.text, suggestion.type)} to={"/search?query=" + encodeURIComponent(suggestion.text).replace(/%20/g, '+')}>
                                        <SearchSuggestionsCard {...suggestion} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }</div>
                <div className='mx-8 sm:mx-20 md:mx-28 lg:mx-44 xl:mx-60 pt-3 pl-2'>
                {
                    searchText === searchName && searchText === "" || searchName == null ? ("") :
                        <ul>

                            <div className='flex gap-2 text-sm font-medium mb-1'>
                                <h1 className={isDish === 'RESTAURANT' ? 'bg-black text-white py-2 px-4 rounded-3xl' : 'p-2 border rounded-3xl'}>Restaurants</h1>
                                <h1 className={isDish === 'DISH' ? 'bg-black text-white py-2 px-4 rounded-3xl' : 'p-2 border rounded-3xl'}>Dishes</h1>
                            </div>

                            <div className='bg-gray-100 py-4 px-2 md:px-4 z-2'>
                                {isDish === 'RESTAURANT' && searchByRes !== undefined ? (
                                    <div>
                                        <div className='w-full md:w-1/2'>
                                            {searchByRes.cards && searchByRes.cards[0]?.card?.card?.info ? (
                                                <SearchResultResCard data={searchByRes.cards[0].card.card.info} />
                                            ) : (
                                                ("")
                                            )}
                                        </div>
                                        <h1 className='font-bold text-lg mt-8'>More Restaurants</h1>
                                        <div className='grid grid-cols-1 md:grid-cols-2 pt-4'>
                                            {searchByRes.cards && searchByRes.cards[1]?.card?.card?.restaurants?.map((res) => (
                                                <div className='md:pr-2 pb-2' key={res.info.id}>
                                                    <SearchResultResCard data={res.info} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 pt-4'>
                                            {searchByRes.cards && searchByRes.cards
                                                .slice(1) // Exclude the first item
                                                .filter((card, index, self) => {
                                                    // Filter out duplicates based on restaurant IDs
                                                    const id = card?.card?.card?.restaurant?.info?.id;
                                                    return id && index === self.findIndex((c) => c?.card?.card?.restaurant?.info?.id === id);
                                                }).map((res) => (
                                                    <div className='pr-2 pb-2' key={res?.card?.card?.restaurant?.info?.id}>
                                                        <SearchResultResCard data={res?.card?.card?.restaurant?.info} />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </ul>
                }
            </div>

        </>
    )
}

export default SearchRestaurants