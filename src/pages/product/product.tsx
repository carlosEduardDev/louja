import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FETCH_PRODUCT } from "@/constants/api";
import useFetch from "@/hooks/useFetch";
import { ProductParams } from "@/interfaces/product";
import formatCurrencyBRL from "@/utils/formatCurrency";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonProduct from "./components/skeleton-product";
import { GlobalContext } from "@/store/globalStorage";
import React from "react";
import { ContextProps } from "@/store/interfaces";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import useLocalStorage from "@/hooks/useLocalStorage";

const ProductPage = () => {
  const { id } = useParams();
  const { setState } = useLocalStorage("products", "");
  const { data, loading } = useFetch<ProductParams>(FETCH_PRODUCT + id);
  const navigate = useNavigate();
  const [{ shopCar, setShopCar }] = React.useContext(
    GlobalContext
  ) as ContextProps;
  const { toast } = useToast();

  React.useEffect(() => {
    setState(JSON.stringify(shopCar));
  }, [shopCar]);

  function handleSetShopCar() {
    const filter = shopCar.filter((obj) => obj.id === data?.id);

    if (data && !filter.length) {
      setShopCar([
        ...shopCar,
        {
          id: data.id,
          img: data.thumbnail,
          price: data.price,
          title: data.title,
        },
      ]);
    }
  }

  if (loading) return <SkeletonProduct />;

  return (
    <section
      className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4"
      style={{
        animation: "fade 1s linear forwards",
        opacity: 0,
      }}
    >
      <div className="lg:flex-row flex flex-col items-center gap-8 lg:gap-5 xl:gap-40 lg:mt-16 mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="sm:w-[40%] md:w-[50%] w-[70%] sm:ml-8"
        >
          <CarouselContent>
            {data &&
              data.pictures.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full flex justify-center items-center"
                >
                  <Card className="border-none shadow-none">
                    <CardContent className="min-h-[180px] flex items-center">
                      <img
                        src={img.url}
                        className="sm:w-full sm:max-h-[400px] max-h-[280px]"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <Dialog>
            <DialogTrigger
              asChild
              className="float-right text-primary font-semibold underline cursor-pointer"
            >
              <p>Ver características</p>
            </DialogTrigger>
            <DialogContent className="lg:max-w-[1000px] max-w-[80%] gap-4 max-h-[500px] overflow-auto">
              <DialogHeader>
                <DialogTitle>{data?.title}</DialogTitle>
                <DialogDescription>Informações do produto:</DialogDescription>
              </DialogHeader>
              <ul className="grid lg:grid-cols-2">
                {data?.attributes.map((att) => (
                  <li className="md:text-base text-sm mb-2" key={att.name}>
                    <span className="font-medium">{att.name}</span>:{" "}
                    {att.value_name}
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
          <CarouselPrevious />
          <CarouselNext className="lg:right-0 xl:-right-7" />
        </Carousel>
        {data && (
          <div className="flex flex-col justify-center">
            <h1 className="text-button text-lg font-semibold sm:font-normal sm:text-2xl mb-2">
              {data?.title}
            </h1>
            <div className="sm:flex">
              {data.original_price && (
                <p className="mr-4 font-semibold sm:text-xl text-orange-400 line-through">
                  {formatCurrencyBRL(data.original_price)}
                </p>
              )}
              <p className="text-button font-bold sm:text-3xl text-2xl">
                {formatCurrencyBRL(data.price)}
              </p>
            </div>
            <p className="sm:text-xl text-lg sm:mt-6 mt-4">
              {data?.condition === "new"
                ? "Condição: novo"
                : data?.condition === "not_specified"
                ? ""
                : data?.condition === "used"
                ? "Condição: seminovo"
                : ""}
            </p>
            <div className="mb-6">
              <p className="sm:text-xl text-lg sm:mt-6 mt-4">
                Enviado de{" "}
                {data?.seller_address.city.name ===
                data?.seller_address.state.name
                  ? data.seller_address.city.name
                  : `${data.seller_address.city.name}, ${data.seller_address.state.name}, `}
                {data?.seller_address.country.name}
              </p>
              {data.warranty && <p className="text-lg">{data.warranty}</p>}
            </div>
            <div className="sm:flex mb-8 sm:mb-0">
              <Button className="bg-button w-full sm:w-auto mb-2 sm:mb-0 border-2 border-transparent text-sm sm:text-lg hover:bg-background hover:border-button hover:border-2 hover:text-button sm:mr-4">
                <a href={data.permalink} target="_blank">
                  Ver no Mercado Livre&reg;
                </a>
              </Button>
              <Button
                disabled={
                  shopCar.filter((obj) => obj.id === data?.id).length === 1
                }
                className="bg-button w-full sm:w-auto text-sm sm:text-lg border-2 border-transparent hover:bg-background hover:border-button hover:border-2 hover:text-button"
                onClick={() => {
                  handleSetShopCar();
                  toast({
                    title: "Produto adicionado a sacola!",
                    action: (
                      <ToastAction
                        altText="Ir"
                        onClick={() => navigate("/shop-car")}
                      >
                        Ir para a sacola
                      </ToastAction>
                    ),
                  });
                }}
              >
                {shopCar.filter((obj) => obj.id === data?.id).length
                  ? "Item adicionado a sacola"
                  : "Adicionar a sacola"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
