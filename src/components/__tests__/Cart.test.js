import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test('Clear items from Cart Page', async () => { 
    const cart = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantMenu />
            <Cart />
          </Provider>
        </StaticRouter>
      );
      await waitFor(() => expect(cart.getByTestId("menu")));

      const addBtn = cart.getAllByTestId("addBtn");
    
      fireEvent.click(addBtn[0]);
      fireEvent.click(addBtn[2]);
    
      const cartItems = cart.getByTestId("cart-items")
    //   console.log(cartItems.children.length);
    expect(cartItems.children.length).toBe(2);
 })

 test('Menu Items should load on Cart Page', async () => { 
    const cart = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantMenu />
            <Cart />
          </Provider>
        </StaticRouter>
      );
      await waitFor(() => expect(cart.getByTestId("menu")));

      const addBtn = cart.getAllByTestId("addBtn");
    
      fireEvent.click(addBtn[5]);
      fireEvent.click(addBtn[6]);
    
    const cartItems = cart.getByTestId("cart-items")
    const clearCart = cart.getByTestId("clear-cart")
    fireEvent.click(clearCart);
    //   console.log(cartItems.children.length);
    expect(cartItems.children.length).toBe(0);
 })
 test('Menu Items should load on Cart Page', async () => { 
    const cart = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantMenu />
            <Cart />
          </Provider>
        </StaticRouter>
      );
      await waitFor(() => expect(cart.getByTestId("menu")));

      const addBtn = cart.getAllByTestId("addBtn");
    
      fireEvent.click(addBtn[1]);
      fireEvent.click(addBtn[3]);
    
    const cartItems = cart.getByTestId("cart-items")
    const removeItemBtn = cart.getAllByTestId("removeBtn")
    // console.log(removeItemBtn)
    fireEvent.click(removeItemBtn[0]);
    //   console.log(cartItems.children.length);
    expect(cartItems.children.length).toBe(1);
 })