import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileLoading() {
  return (
    <div className="mx-auto mt-1 grid w-full max-w-6xl items-start gap-4 px-2 text-white">
      <div className="flex w-fit items-center gap-1 text-gray-300">
        <Skeleton className="h-6 w-6" />
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[612px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Skeleton className="h-[93px] w-[93px] rounded-full" />
                <div className="flex flex-col justify-center gap-1">
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-7 w-32" />
                  </div>
                  <div className="mt-1 flex flex-col items-center gap-2.5 sm:flex-row">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </div>
              </div>
              <Skeleton className="h-9 w-16" />
            </div>

            <div className="flex gap-9">
              <div className="flex flex-col">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex flex-col">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex flex-col">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>

          <div className="flex h-fit items-center gap-2 border-b border-[#37414F] text-white md:gap-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative pb-4 pt-2">
                <Skeleton className="h-6 w-24" />
              </div>
            ))}
          </div>

          <div className="justify-items-right grid w-full overflow-x-hidden">
            <div className="grid w-full">
              <div className="grid w-full justify-start gap-4 px-2 text-sm" style={{ gridTemplateColumns: 'auto minmax(0px, 40%) 1fr 1fr' }}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-16" />
                ))}
              </div>
              <div className="grid w-full gap-4 p-2" style={{ gridTemplateColumns: 'auto minmax(0px, 40%) 1fr' }}>
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex min-w-0 flex-col gap-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-6 w-16 justify-self-end" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden max-w-[360px] flex-col gap-4 lg:flex">
          <div className="max-w-[400px]">
            <Skeleton className="mb-3 h-6 w-32" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-4 grid w-full min-w-[350px] gap-4" style={{ gridTemplateColumns: 'auto auto 1fr' }}>
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex flex-col justify-start gap-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex w-full items-center justify-end">
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 