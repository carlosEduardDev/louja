import { Skeleton } from "../../ui/skeleton";

const SkeletonProducts = () => {
  return (
    <section className="py-6 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 grid-cols-[repeat(auto-fill,minmax(290px,1fr))] ">
      {Array.from({ length: 42 }, () => 1).map(() => (
        <div key={crypto.randomUUID()} className="flex flex-col space-y-3 py-8">
          <Skeleton className="h-[380px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-6" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkeletonProducts;
