import React, { useEffect, useState } from 'react'

const SearchResults = () => {
  const [searchResults, setSearchResult] = useState([])
  useEffect(()=> {
    getDataOfSearchResults();
  },[])
  const getDataOfSearchResults = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=${name}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bc9bbc65-5d8b-0aa5-bbdc-65b467e6afdb&metaData=${metadata}`)
    const json = await data.json();
    // console.log("hello")
    // setSearchResult(json)
  }
  return (
    <div className='mx-44 bg-gray-500'>

    </div>
  )
}

export default SearchResults