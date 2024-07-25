import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
  return (
    <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 mt-16 sm:mt-0 px-8">
      <div className="lg:flex gap-16">
        <Skeleton className="mt-8 lg:w-[40%] h-[60vh]" />
        <div className="w-full overflow-hidden">
          <Skeleton className="mt-8 h-16" />
          <Skeleton className="mt-8 w-full h-3/4" />
        </div>
      </div>
    </section>
  );
};

export default SkeletonProduct;
