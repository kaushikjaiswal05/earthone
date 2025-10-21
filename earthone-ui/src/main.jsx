import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"; 
import App from "./App.jsx";
import Shop from "./routes/shop/Shop.jsx";
import PayLater from "./routes/paylater/PayLater.jsx";
import Membership from "./routes/membership/Membership.jsx";
import Blog from "./routes/blog/Blog.jsx";
import Plants from "./routes/plants/Plants.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/pay-later",
    element: <PayLater />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/plants",
    element: <Plants />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
