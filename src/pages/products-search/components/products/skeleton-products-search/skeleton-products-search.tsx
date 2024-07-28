import { Skeleton } from "../../../../../components/ui/skeleton";

const SkeletonProducts = () => {
  return (
    <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-cols-2">
      {Array.from({ length: 42 }, () => 1).map(() => (
        <div key={crypto.randomUUID()} className="flex flex-col space-y-3">
          <Skeleton className="h-[370px] sm:h-[420px] rounded-xl" />
        </div>
      ))}
    </section>
  );
};

export default SkeletonProducts;