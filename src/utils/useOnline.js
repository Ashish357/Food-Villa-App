import React, { useEffect, useState } from 'react'

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true)
  //i want to check once page loads
  useEffect(()=> {
    const handleOnline = () => {
      setIsOnline(true);
    }
    const handleOffline = () => {
      setIsOnline(false);
    }
    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);

    // return() => {
    //   window.addEventListener("online",handleOnline);
    //   window.addEventListener("offline",handleOffline);
    // }
  },[])
  return isOnline;
}

export default useOnline