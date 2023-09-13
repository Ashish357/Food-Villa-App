import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import {StaticRouter} from "react-router-dom/server"
import store from "../../utils/store"

test('Logo should load on rendering data', () => { 
    
    //load header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </StaticRouter>);
    // console.log(header)
    //check if header is loaded
    const logo = header.getAllByTestId('logo')
    // console.log(logo);
    // console.log(logo[0]);
    expect(logo[0].innerHTML).toBe("Food Villa")
 })

 test("Online Status should be green on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if logo is loaded
    const onlineStatus = header.getByTestId("online-status");
  
    expect(onlineStatus.innerHTML).toBe("✅");
  });
  
test("Cart should have 0 items on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = header.getByTestId('cart');
    expect(cart.innerHTML).toBe("Cart- 0")
});