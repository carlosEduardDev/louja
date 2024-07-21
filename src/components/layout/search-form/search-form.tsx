import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollTop } from "@/utils/scrollTop";

const SearchForm = (props: React.ComponentProps<"form">) => {
  const [valueSearch, setValueSearch] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (valueSearch && inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      navigate(`/products/${valueSearch}`);
      setValueSearch("");
      scrollTop()
    }
  }

  return (
    <form {...props} onSubmit={handleSubmit} className="flex relative">
      <Input
        placeholder="Buscar produtos..."
        className="bg-background text-black min-w-[50dvw] xl:h-14 lg:h-14 sm:h-12 h-9"
        onChange={(e) => setValueSearch(e.target.value)}
        ref={inputRef}
      />
      <Button className="bg-button h-full rounded-l-none border-white border-2 shadow-none hover:bg-orange-600 absolute right-0">
        <Search className="w-5 sm:w-auto" />
      </Button>
    </form>
  );
};

export default SearchForm;
