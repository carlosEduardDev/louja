import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import ShopCartPage from "./pages/shop-cart";
import FavoritesPage from "./pages/favorites";
import ProductsSearchPage from "./pages/products-search";
import ErrorPage from "./pages/notfound";
import ProductPage from "./pages/product/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop-car",
        element: <ShopCartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/products-search/:id",
        element: <ProductsSearchPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
