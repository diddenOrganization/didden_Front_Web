'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from 'flowbite-react';

import { MovieInfo } from '@/types/model/movie/MovieInfoResponse';
import Movie from '@/components/movie';

const API_KEY = process.env.movieApiKey;

const getMovies = async ({ pageParam }: { pageParam: number }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageParam}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export default function HomePage() {
  const { ref, inView } = useInView();

  const {
    data: movies,
    status,
    fetchStatus,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
    initialPageParam: 1,
    getNextPageParam: (page) => {
      const lastPage = page.total_pages;
      const currentPage = page.page;
      if (currentPage > lastPage) {
        return false;
      }

      return currentPage + 1;
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
          <div className="m-auto mb-5 mt-5 flex w-full grid-cols-1 flex-col gap-4 md:grid md:w-10/12 md:grid-cols-4 md:items-center">
            {movies?.pages?.map((page) =>
              page.results.map((movie: MovieInfo, index: number) => {
                if (page.results.length === index + 1) {
                  return (
                    <Movie
                      key={index}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      innerRef={ref}
                    />
                  );
                } else {
                  return <Movie key={index} id={movie.id} title={movie.title} poster_path={movie.poster_path} />;
                }
              }),
            )}
          </div>
        </main>
      )}
      {(status === 'pending' || fetchStatus === 'fetching') && (
        <div className="fixed left-1/2 top-1/2 z-[9999] text-center">
          <Spinner color="purple" aria-label="Loading" size="xl" theme={{ size: { xl: 'w-50 h-50' } }} />
        </div>
      )}
    </>
  );
}
