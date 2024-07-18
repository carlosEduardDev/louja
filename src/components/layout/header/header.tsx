import { ComponentProps } from "react";
import Actions from "../actions";
import SearchForm from "../search-form";
import { Link } from "react-router-dom";

const Header = (props: ComponentProps<"header">) => {
  return (
    <header
      className="bg-primary py-6 lg:px-28 md:px-18 sm:px-8 px-4 text-background flex justify-between items-center"
      {...props}
    >
      <Link to="/" className="hidden sm:block">
        <h1 className="font-extrabold text-3xl">Louja</h1>
      </Link>

      <SearchForm />
      <Actions />
    </header>
  );
};

export default Header;
