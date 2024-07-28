import { GlobalContext } from "@/store/globalStorage";
import { ContextProps } from "@/store/interfaces";
import formatCurrencyBRL from "@/utils/formatCurrency";
import imgBag from "@/assets/bag.png";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ShopCartPage = () => {
  const [{ shopCar, setShopCar }] = React.useContext(
    GlobalContext
  ) as ContextProps;
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!shopCar.length)
    return (
      <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4 items-center gap-20 justify-center flex lg:flex-row flex-col mt-32">
        <img src={imgBag} className="sm:w-[170px] w-[150px]" />
        <div className="flex flex-col gap-4">
          <h1 className="sm:text-xl text-base">
            Você ainda não adicionou nenhum item a sua sacola...
          </h1>
          <Button className="w-full text-base" onClick={() => navigate("/")}>
            Comece a comprar
          </Button>
        </div>
      </section>
    );

  return (
    <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4">
      <Table>
        <TableCaption className="text-[18px] bg-primary py-2 rounded text-background">
          Total dos seus produtos:{" "}
          {formatCurrencyBRL(shopCar.reduce((att, acc) => att + acc.price, 0))}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="text-right">Preço</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shopCar.map((item) => (
            <TableRow
              key={item.id}
              style={{
                animation: "fade 1s linear forwards",
                opacity: 0,
              }}
            >
              <TableCell>
                <Link className="block" to={`/product/${item.id}`}>
                  <img src={item.img} />
                </Link>
              </TableCell>
              <TableCell className="w-1/3">
                <Link className="block" to={`/product/${item.id}`}>
                  {item.title.substring(0, 50).concat("...")}
                </Link>
              </TableCell>
              <TableCell className="text-right text-base">
                <Link className="block" to={`/product/${item.id}`}>
                  {formatCurrencyBRL(item.price)}
                </Link>
              </TableCell>
              <TableCell className="w-4">
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setShopCar([
                      ...shopCar.filter((prod) => prod.id !== item.id),
                    ]);
                    toast({
                      title: "Produto deletado.",
                      variant: "destructive",
                    });
                  }}
                >
                  <Trash size={"20px"} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ShopCartPage;
