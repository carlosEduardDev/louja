import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { GlobalContext } from "@/store/globalStorage";
import { ContextProps } from "@/store/interfaces";
import { ShoppingBag, Trash } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [{ shopCar, setShopCar }, { favorites, setFavorites }] =
    React.useContext(GlobalContext) as ContextProps;
  console.log(favorites);

  if (!favorites.length)
    return (
      <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4 py-6">
        <h1 className="text-primary font-semibold text-2xl mb-4">
          Meus Favoritos
        </h1>
        <h1 className="text-lg">
          Você ainda não adicionou nenhum item aos favoritos...
        </h1>
      </section>
    );

  return (
    <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favorites.map((favorite) => (
            <TableRow
              key={favorite.id}
              style={{
                animation: "fade 1s linear forwards",
                opacity: 0,
              }}
            >
              <TableCell>
                <Link className="w-1/3" to={`/product/${favorite.id}`}>
                  <img src={favorite.img} />
                </Link>
              </TableCell>
              <TableCell>
                <Link className="block" to={`/product/${favorite.id}`}>
                  {favorite.title.substring(0, 20).concat("...")}
                </Link>
              </TableCell>
              <TableCell className="w-4">
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    const filter = shopCar.filter(
                      (item) => item.id === favorite.id
                    );
                    if (!filter.length) {
                      setShopCar([
                        ...shopCar,
                        {
                          id: favorite.id,
                          img: favorite.img,
                          title: favorite.title,
                          price: favorite.price,
                        },
                      ]);
                      setFavorites([
                        ...favorites.filter((prod) => prod.id !== favorite.id),
                      ]);
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
                    }
                  }}
                >
                  <ShoppingBag size={"20px"} />
                </Button>
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setFavorites([
                      ...favorites.filter((prod) => prod.id !== favorite.id),
                    ]);
                    toast({
                      title: "Produto deletado",
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

export default FavoritesPage;
