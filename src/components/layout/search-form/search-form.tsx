import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ComponentProps } from "react";
import { Search } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { FETCH_LIST_PRODUCT, FETCH_PRODUCT } from "@/constants/api";
import { useNavigate } from "react-router-dom";
import { ListProductsParams } from "@/interfaces/list-products";

const SearchForm = (props: ComponentProps<"form">) => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const { data, error, loading } = useFetch<ListProductsParams>(
    FETCH_LIST_PRODUCT + search
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form {...props} onSubmit={handleSubmit} className="flex relative">
      <Input
        placeholder="Buscar produtos..."
        className="bg-background text-black min-w-[50dvw] xl:h-14 lg:h-14 sm:h-12 h-9"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="bg-button h-full rounded-l-none border-white border-2 shadow-none hover:bg-orange-600 absolute right-0">
        <Search className="w-5 sm:w-auto" />
      </Button>
    </form>
  );
};

export default SearchForm;
