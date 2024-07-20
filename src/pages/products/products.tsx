import { FETCH_LIST_PRODUCT } from "@/constants/api";
import useFetch from "@/hooks/useFetch";
import { ListProductsParams } from "@/interfaces/list-products";
import { useParams } from "react-router-dom";
import SkeletonProducts from "@/components/layout/skeleton-products";
import Products from "@/components/layout/products";

const ProductsPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch<ListProductsParams>(
    FETCH_LIST_PRODUCT + id
  );

  if (loading) return <SkeletonProducts />;

  if (data?.results.length === 0)
    return (
      <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4">
        <h1 className="text-xl">Nenhum produto encontrado...</h1>
      </section>
    );

  if (error && error !== "signal is aborted without reason")
    return (
      <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4">
        <h1 className="text-xl">Ocorreu um erro...</h1>
      </section>
    );

  return <>{data && <Products data={data} />}</>;
};

export default ProductsPage;
