import { Skeleton } from "@/components/ui/skeleton";

const LoadingCarrousel = () => {
  return (
    <>
      <section className="py-16 lg:px-28 md:px-18 sm:px-8 px-4 grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-cols-2">
        {Array.from({ length: 42 }, () => 1).map(() => (
          <div key={crypto.randomUUID()} className="flex flex-col space-y-3">
            <Skeleton className="h-[380px] sm:h-[440px] rounded-xl flex flex-col-reverse p-4 justify-between">
            </Skeleton>
          </div>
        ))}
      </section>
    </>
  );
};

export default LoadingCarrousel;
