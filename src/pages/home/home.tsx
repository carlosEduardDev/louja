import { FETCH_CATEGORY } from "@/constants/api";
import { randomCategory } from "@/constants/category-list";
import useFetch from "@/hooks/useFetch";
import { ListProductsParams } from "@/interfaces/list-products";
import CategoryCarrousel from "./components/carrousel";
import LoadingCarrousel from "./components/skeleton-home/skeleton-home";

const HomePage = () => {
  const category1 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[0].category
  );
  const category2 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[1].category
  );
  const category3 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[2].category
  );
  const category4 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[3].category
  );
  const category5 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[4].category
  );
  const category6 = useFetch<ListProductsParams>(
    FETCH_CATEGORY + randomCategory[5].category
  );

  if (category1.loading) return <LoadingCarrousel />;

  return (
    <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4">
      {category1.data && <CategoryCarrousel category={category1.data} id={0} />}
      {category2.data && <CategoryCarrousel category={category2.data} id={1} />}
      {category3.data && <CategoryCarrousel category={category3.data} id={2} />}
      {category4.data && <CategoryCarrousel category={category4.data} id={3} />}
      {category5.data && <CategoryCarrousel category={category5.data} id={4} />}
      {category6.data && <CategoryCarrousel category={category6.data} id={5} />}
    </section>
  );
};

export default HomePage;
