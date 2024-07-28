import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { randomCategory } from "@/constants/category-list";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ListProductsParams } from "@/interfaces/list-products";
import { GlobalContext } from "@/store/globalStorage";
import { ContextProps } from "@/store/interfaces";
import formatCurrencyBRL from "@/utils/formatCurrency";
import replaceThumb from "@/utils/replaceThumb";
import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface ICarrousel {
  category: ListProductsParams;
  id: number;
}

const CategoryCarrousel = ({ category, id }: ICarrousel) => {
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

  const shortCategory = category.results.slice(0, 16);

  return (
    <div className="py-10">
      <h1 className="text-2xl pb-4 text-primary font-bold">
        {randomCategory[id].subject}
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {shortCategory.map((product, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/4 xl:basis-1/6 sm:basis-1/3"
            >
              {" "}
              <div className="p-1">
                {product && (
                  <Card
                    key={product.id}
                    style={{
                      animation: "fade 1s linear forwards",
                      opacity: 0,
                    }}
                  >
                    <CardHeader className="relative">
                      <Heart
                        className={`absolute right-4 top-4 cursor-pointer z-10 ${
                          favorites.filter((item) => item.id === product.id)
                            .length === 0
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
                      <Link to={`product/${product.id}`}>
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
                    <Link to={`product/${product.id}`}>
                      <CardContent className="h-[40px] mb-4 overflow-hidden">
                        <p>{product.title.substring(0, 30).concat("...")}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-button hover:bg-background hover:border-button hover:border-2 hover:text-button px-8 sm:text-lg">
                          Ver mais
                        </Button>
                      </CardFooter>
                    </Link>
                  </Card>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:-left-4 md:-left-7 lg:-left-10 xl:-left-16" />
        <CarouselNext className="right-1 sm:-right-4 md:-right-7 lg:-right-10 xl:-right-16" />
      </Carousel>
      <Link
        className="text-primary font-semibold underline float-right pt-2"
        to={`/products-search/${randomCategory[id].subject}`}
      >
        Ver mais produtos dessa categoria
      </Link>
    </div>
  );
};

export default CategoryCarrousel;
