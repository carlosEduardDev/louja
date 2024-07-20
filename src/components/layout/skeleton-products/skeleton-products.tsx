import { Skeleton } from "../../ui/skeleton";

const SkeletonProducts = () => {
  return (
    <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ">
      {Array.from({ length: 42 }, () => 1).map((index) => (
        <div key={index} className="flex flex-col space-y-3 py-8">
          <Skeleton className="h-[125px] w-[] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkeletonProducts;
