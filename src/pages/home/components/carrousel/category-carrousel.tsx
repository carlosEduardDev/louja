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
import { randomCategory } from "@/constants/category-list";
import { ListProductsParams } from "@/interfaces/list-products";
import formatCurrencyBRL from "@/utils/formatCurrency";
import replaceThumb from "@/utils/replaceThumb";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ICarrousel {
  category: ListProductsParams;
  id: number;
}

const CategoryCarrousel = ({ category, id }: ICarrousel) => {
  const shortCategory = category.results.slice(0, 16);
  console.log(shortCategory);
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
                      <Heart className="absolute right-4 top-4 cursor-pointer text-button" />
                      <img
                        src={replaceThumb(product.thumbnail)}
                        className="w-full sm:pb-4"
                      />
                      <CardTitle></CardTitle>
                      <CardDescription className="sm:text-2xl text-xl font-semibold text-button">
                        {formatCurrencyBRL(product.price)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[40px] mb-4 overflow-hidden">
                      <p>{product.title.substring(0, 30).concat("...")}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-button hover:bg-background hover:border-button hover:border-2 hover:text-button px-8 sm:text-lg">
                        Ver mais
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:block hidden" />
        <CarouselNext className="lg:block hidden" />
      </Carousel>
      <Link
        className="text-primary font-semibold underline float-right pt-2"
        to={`/products/${randomCategory[id].subject}`}
      >
        Ver mais produtos dessa categoria
      </Link>
    </div>
  );
};

export default CategoryCarrousel;
