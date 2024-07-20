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
    <section className="py-4 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-cols-2">
      {data.results.map((result) => (
        <Card
          key={result.id}
          style={{ animation: "fade 1s linear forwards", opacity: 0 }}
        >
          <CardHeader>
            <img
              src={replaceThumb(result.thumbnail)}
              className="w-full sm:pb-4"
            />
            <CardTitle></CardTitle>
            <CardDescription className="text-2xl font-semibold text-button">
              {formatCurrencyBRL(result.price)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{result.title.substring(0, 27).concat("...")}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-button hover:bg-background hover:border-button hover:border-2 hover:text-button px-8 sm:text-lg">
              Ver mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Products;
