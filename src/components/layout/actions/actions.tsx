import { GlobalContext } from "@/store/globalStorage";
import { ContextProps } from "@/store/interfaces";
import { Heart, ShoppingBag } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Actions = () => {
  const [{ shopCar }] = React.useContext(GlobalContext) as ContextProps;

  const [_, { favorites }] = React.useContext(GlobalContext) as ContextProps;

  const { pathname } = useLocation();
  return (
    <nav className="flex gap-3">
      <Link to="/shop-car" className="relative">
        <ShoppingBag />
        {shopCar.length && pathname !== "/shop-car" ? (
          <>
            <span className="animate-ping absolute h-3 w-3 -top-1 -right-1 rounded-full bg-blue-950 opacity-75"></span>
            <span className="absolute -top-1 -right-1 rounded-full h-3 w-3 bg-blue-900"></span>
          </>
        ) : null}
      </Link>
      <Link to="/favorites">
        <Heart className={`${favorites.length ? "fill-background" : ""}`} />
      </Link>
    </nav>
  );
};

export default Actions;
