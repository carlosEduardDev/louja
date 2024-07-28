import { FETCH_CATEGORY, FETCH_LIST_PRODUCT } from "@/constants/api";
import useFetch from "@/hooks/useFetch";
import { ListProductsParams } from "@/interfaces/list-products";
import { useParams } from "react-router-dom";
import SkeletonProducts from "@/pages/products-search/components/products/skeleton-products-search";
import Products from "@/pages/products-search/components/products/products";
import { randomCategory } from "@/constants/category-list";
import { scrollTop } from "@/utils/scrollTop";
import React from "react";

const ProductsSearchPage = () => {
  React.useEffect(() => {
    scrollTop();
  }, []);

  const { id } = useParams();

  const { data, error, loading } = useFetch<ListProductsParams>(
    FETCH_LIST_PRODUCT + id
  );

  const { data: dataNotSearch, loading: loadingNotSearch } =
    useFetch<ListProductsParams>(FETCH_CATEGORY + randomCategory[0].category);

  if (loading)
    return (
      <>
        <h1 className="text-gray-600 text-xl py-6 lg:px-28 md:px-18 sm:px-8 px-4 ">
          exibindo resultados para '{id}'
        </h1>
        <SkeletonProducts />
      </>
    );

  if (data?.results.length === 0)
    return (
      <>
        <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4">
          <h1 className="text-lg sm:text-xl text-gray-600">
            Nenhum produto encontrado para '{id}'!
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            verifique a ortografia e tente novamente...
          </p>
          <br />
          <h1 className="text-gray-600">Produtos que talvez você goste:</h1>
        </section>
        {loadingNotSearch && <SkeletonProducts />}
        {dataNotSearch && <Products data={dataNotSearch} />}
      </>
    );

  if (error)
    return (
      <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4">
        <h1 className="text-xl py-6 lg:px-28 md:px-18 sm:px-8 px-4 text-gray-600">
          Ocorreu um erro...
        </h1>
      </section>
    );

  return (
    <>
      {data && (
        <>
          <h1 className="text-gray-600 text-xl py-6 lg:px-28 md:px-18 sm:px-8 px-4 ">
            exibindo resultados para '{id}'
          </h1>
          <Products data={data} />
        </>
      )}
    </>
  );
};

export default ProductsSearchPage;