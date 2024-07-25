import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <nav className="flex gap-3">
      <Link to="/shop-car">
        <ShoppingBag />
      </Link>
      <Link to="/favorites">
        <Heart />
      </Link>
    </nav>
  );
};

export default Actions;
