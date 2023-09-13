import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart, removeItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div> 
      {cartItems.length !== 0 ? (
        <FoodItem />
      ) : (
        <div className='w-100% md:h-[calc(100vh-80px)] flex items-center flex-col justify-center my-0 mx-auto text-center'>
          <div className="w-96"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" /></div>
          <div className='mt-6 text-base font-semibold'>Your Cart is Empty</div>
          <div className='mt-2'>You can go to home page to view more restaurants</div>
          <div className='mt-7 py-3 px-5 capitalize bg-[#fc8019] text-white font-semibold cursor-pointer text-base text-center border-0 outline-0'><Link to='/'>See Restaurants Near You</Link></div>
        </div>
      )}
      {/* <div className="flex" data-testid="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <FoodItem  {...item} />
            <button
              data-testid="removeBtn"
              className="p-1 bg-green-50"
              onClick={() => handleRemoveItem(item)}
            >
              Remove Item
            </button>
          </div>
        ))}
      </div> */}
    </div>

  )
}

export default Cart