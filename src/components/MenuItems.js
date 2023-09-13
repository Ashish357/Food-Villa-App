import React, { useState } from 'react'
import MenuCard from './MenuCard'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

const MenuItems = ({ title, ItemCards, categoryLength, nestingLevel}) => {
    // console.log(ItemCards[1]?.card?.info)
    // ItemCards.itemCards && console.log(ItemCards.length)
    const [isVisible,setIsVisible] = useState(true)
    
    const toggleIsVisble = () => {
        setIsVisible(!isVisible)
    }
    return (
        <>
       { categoryLength &&
        <div className={nestingLevel > 0 ? 'pl-5' : ''}>
            <button className='flex items-center justify-between w-full mb-4'
            onClick={toggleIsVisble}
            >
           <h3 className='font-bold text-base'>{title} ({categoryLength})</h3>
            {
                isVisible ? (
                    <MdKeyboardArrowUp size={30}/>
                ):(
                    <MdKeyboardArrowDown size={30} />
                )
            }
            </button>
            <div>
                {
                    isVisible && ItemCards?.map((element, index) =>
                        element.itemCards ?
                            <div key={index}>
                                <MenuItems ItemCards={element.itemCards} key={index} categoryLength={element.itemCards.length} title={element.title} nestingLevel={1}/>
                            </div>
                            // <h1>Menu Item</h1> 
                            :
                            <MenuCard key={index} ItemDetails={element?.card?.info} />
                        // <h1>Menu Card</h1>
                    )
                }
            </div>
        </div>
}
</>
    )
}

export default MenuItems