import { Metadata } from 'next';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { Fragment } from 'react';

import { MovieInfo, MovieInfoResponse } from '../../types/model/movie/MovieInfoResponse';

import Movie from '@/components/movie';

export const metadata: Metadata = {
  title: 'Home',
};

export const API_KEY = 'c62ed3cccb5e58994a64922b82ca8880';

const getMovies = async () => {
  return await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response) =>
    response.json(),
  );
};

export default async function HomePage() {
  // const { data, status } = useInfiniteQuery({
  //   queryKey: ['movies'],
  //   queryFn: getMovies,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage) => lastPage.nextCursor,
  // });

  const movies: MovieInfoResponse = await getMovies();

  return (
    <div className="margincenter grid w-full max-w-[90%] grid-cols-5 gap-25 pb-50 pt-150 text-18">
      {/* {status === 'success' &&
        data.pages.map((movie: MovieInfo, index: number) => (
          <Fragment key={index}>
            <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
          </Fragment>
        ))} */}
      {movies.results.map((movie: MovieInfo) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
