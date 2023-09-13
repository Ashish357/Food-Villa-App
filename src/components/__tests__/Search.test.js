import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../Body";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";

//ReferenceError: fetch is not defined to solve this
 global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA)
    })
 })   

test("Shimmer should load on Homepage", async () => { 
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </StaticRouter>
      );

    const shimmer = body.getByTestId('shimmer')
    // console.log(shimmer.children)
    // expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(16);
 });

 test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("res-list")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(20);

  // console.log(resList.children);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "kfc",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});
