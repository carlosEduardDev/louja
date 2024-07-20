import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ListProductsParams } from "@/interfaces/list-products";
import formatCurrencyBRL from "@/utils/formatCurrency";
import replaceThumb from "@/utils/replaceThumb";

const Products = ({ data }: { data: ListProductsParams }) => {
  return (
    <section className="py-16 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 grid-cols-[repeat(auto-fill,minmax(290px,1fr))]">
      {data.results.map((result) => (
        <Card
          key={result.id}
          className="border-gray-300"
          style={{ animation: "fade 1s linear forwards", opacity: 0 }}
        >
          <CardHeader>
            <img
              src={replaceThumb(result.thumbnail)}
              className="w-full h-[200px]"
            />
            <CardTitle></CardTitle>
            <CardDescription className="text-2xl font-semibold text-button">
              {formatCurrencyBRL(result.price)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{result.title.substring(0, 25).concat("...")}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-button text-lg">
              Adicionar ao carrinho
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Products;
