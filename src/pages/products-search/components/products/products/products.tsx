import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ListProductsParams } from "@/interfaces/list-products";
import { GlobalContext } from "@/store/globalStorage";
import { ContextProps } from "@/store/interfaces";
import formatCurrencyBRL from "@/utils/formatCurrency";
import replaceThumb from "@/utils/replaceThumb";
import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data }: { data: ListProductsParams }) => {
  const [_, { favorites, setFavorites }] = React.useContext(
    GlobalContext
  ) as ContextProps;
  const { setState: setLocalFavorites } = useLocalStorage("favorites", "");

  React.useEffect(() => {
    setLocalFavorites(JSON.stringify(favorites));
  }, [favorites]);

  const { toast } = useToast();

  function handleFavorites(
    id: string,
    price: number,
    img: string,
    title: string
  ) {
    const filter = favorites.filter((item) => item.id === id);

    if (filter.length === 0) {
      setFavorites([...favorites, { id, price, title, img }]);
    }
  }

  return (
    <section className="py-4 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-cols-2">
      {data.results.map((product) => (
        <Card
          key={product.id}
          style={{ animation: "fade 1s linear forwards", opacity: 0 }}
        >
          <CardHeader className="relative">
            <Heart
              className={`absolute right-4 top-4 cursor-pointer z-10 ${
                favorites.filter((item) => item.id === product.id).length === 0
                  ? "text-button"
                  : "fill-orange-300 pointer-events-none stroke-orange-300"
              }`}
              onClick={() => {
                handleFavorites(
                  product.id,
                  product.price,
                  product.thumbnail,
                  product.title
                );
                toast({
                  title: "Produto adicionado aos favoritos",
                });
              }}
            />

            <Link to={`/product/${product.id}`}>
              <img
                src={replaceThumb(product.thumbnail)}
                className="w-full sm:pb-4"
              />
              <CardTitle></CardTitle>
              <CardDescription className="sm:text-2xl text-xl font-semibold text-button">
                {formatCurrencyBRL(product.price)}
              </CardDescription>
            </Link>
          </CardHeader>
          <Link to={`/product/${product.id}`}>
            <CardContent className="h-[40px] overflow-hidden mb-4">
              <p>{product.title.substring(0, 27).concat("...")}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-button hover:bg-background hover:border-button hover:border-2 hover:text-button px-8 sm:text-lg">
                Ver mais
              </Button>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </section>
  );
};

export default Products;
