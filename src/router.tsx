import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/home";
import ShopCartPage from "./pages/shop-cart/shop-cart";
import FavoritesPage from "./pages/favorites/favorites";
import ProductsPage from "./pages/products/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop-cart",
        element: <ShopCartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
