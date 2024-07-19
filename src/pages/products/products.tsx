import { FETCH_LIST_PRODUCT } from "@/constants/api";
import useFetch from "@/hooks/useFetch";
import { ListProductsParams } from "@/interfaces/list-products";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch<ListProductsParams>(
    FETCH_LIST_PRODUCT + id
  );

  if (loading) return <p>Carregando...</p>;

  if (data?.results.length === 0) return <p>Nenhum resultado encontrado...</p>;

  if (error && error !== "signal is aborted without reason")
    return <p>Ocorreu um erro...</p>;

  return <section>{data?.results[0].title}</section>;
};

export default ProductsPage;
