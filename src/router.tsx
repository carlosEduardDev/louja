import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import ShopCartPage from "./pages/shop-cart";
import FavoritesPage from "./pages/favorites";
import ProductsPage from "./pages/products";
import ErrorPage from "./pages/notfound";

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
        path: "/shop-cart",
        element: <ShopCartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
