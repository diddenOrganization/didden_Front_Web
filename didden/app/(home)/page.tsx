'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from 'flowbite-react';

import Tour from '@/components/tour';
import { TourInfo } from '@/types/model/tour/TourInfoResponse';

const getTourList = async ({ pageParam }: { pageParam: number }) => {
  const res = await fetch(`${process.env.tourApiUrl}/api/v1/tour/search?page=${pageParam}&size=20`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

export default function HomePage() {
  const { ref, inView } = useInView();

  const {
    data: tourList,
    status,
    fetchStatus,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['tourList'],
    queryFn: getTourList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const initialPage = allPages.length - 1;
      const nextPage = lastPage.length === 20 ? initialPage + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      {status === 'success' && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 md:pt-50">
          <div className="m-auto mb-5 mt-5 flex w-full grid-cols-1 flex-col gap-12 md:grid md:w-10/12 md:grid-cols-4 md:items-center">
            {tourList?.pages?.map((page) =>
              page.map((tour: TourInfo, index: number) => {
                if (page.length === index + 1) {
                  return (
                    <Tour
                      key={index}
                      contentId={tour.contentId}
                      title={tour.title}
                      highCode={tour.highCode}
                      middleCode={tour.middleCode}
                      serviceCode={tour.serviceCode}
                      address={tour.address}
                      detailImage={tour.detailImage}
                      innerRef={ref}
                    />
                  );
                } else {
                  return (
                    <Tour
                      key={index}
                      contentId={tour.contentId}
                      title={tour.title}
                      highCode={tour.highCode}
                      middleCode={tour.middleCode}
                      serviceCode={tour.serviceCode}
                      address={tour.address}
                      detailImage={tour.detailImage}
                    />
                  );
                }
              }),
            )}
          </div>
        </main>
      )}
      {(status === 'pending' || fetchStatus === 'fetching') && (
        <div className="fixed left-1/2 top-1/2 z-[9999] text-center">
          <Spinner color="purple" aria-label="Loading" size="xl" theme={{ size: { xl: 'size-50' } }} />
        </div>
      )}
    </>
  );
}
