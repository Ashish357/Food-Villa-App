import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { addItem, clearCart, decreamentItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const FoodItem = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleAddFoodItem = (item) => {
    disptach(addItem(item));
  };
  const handleDecreamentFoodItem = (item) => {
    disptach(decreamentItem(item));
  };

  const getItemCount = (item) => {
    const currentItem = cartItems.find((cartItem) => item.id === cartItem.id);
    return currentItem ? currentItem.quantity : 0;
  };

  const getTotal = () => {
    const total = cartItems.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0.0
    );
    return total;
  };
  const handleClearCart = () => {
    disptach(clearCart());
  };

  // const url = useLocation();

  return (
    <div className="w-100% sm:h-[calc(100vh-80px)] flex md:items-center flex-col justify-center my-0 mx-auto md:text-center">
    <div
    className={` ${
      0 && !cartItems.length && "hidden"
    }  h-fit m-8 p-8 bg-white shadow-md font-poppins text-sm flex flex-col`}
    >
      <div className="flex justify-between mb-5 border-b-2 ">
        <div className="flex w-full pb-2 justify-between items-center">
          <span className="font-bold text-base sm:text-xl">Cart Items</span>
          <button
            className="text-base sm:text-xl font-poppins bg-slate-900 px-2 py-1 text-white"
            onClick={handleClearCart}
            >
            {" "}
            Clear Cart
          </button>
        </div>
      </div>
      <div className="border-b-2">
        {cartItems.map((item) => {
          // console.log(item);
          return (
            <div
            key={item.id}
            className="pl-2 pb-2 grid grid-cols-2 md:flex justify-between md:items-center gap-1 my-2 "
            >
              <img
                className="w-24"
                src={IMG_CDN_URL + item?.imageId}
                alt=""
                onError={(event) => (event.target.style.display = "block")}
                />
              <div className="text-sm line-clamp-1 md:line-clamp-none lg:line-clamp-none md:w-60 md:text-lg">{item.name}</div>
              <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
                <button onClick={() => handleDecreamentFoodItem(item)}>
                  -
                </button>
                <span className="text-base">{getItemCount(item)}</span>
                <button onClick={() => handleAddFoodItem(item)}>+</button>
              </div>
              <div className="w-14 font-medium flex justify-center">
                <span className="text-lg">&#8377;{(item.price + 0.0) / 100}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-2 font-bold">
        <span className="text-xl">Total</span>
        <span className="text-xl">&#8377;{(getTotal() + 0.0) / 100}</span>
      </div>
      {/* {url.pathname !== "/checkout" && (
        <Link to={"/checkout"}>
        <button className="font-poppins bg-slate-900 mt-4 p-2 text-white w-full">
        Checkout
          </button>
        </Link>
      )} */}
    </div>
        </div>
  );
};

export default FoodItem;