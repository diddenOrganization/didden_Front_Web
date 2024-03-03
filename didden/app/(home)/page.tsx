import { Metadata } from 'next';

import Movie from '@/components/movie';
import { MovieInfo, MovieInfoResponse } from '@/types/model/movie/MovieInfoResponse';

export const metadata: Metadata = {
  title: 'Home',
};

const API_KEY = 'c62ed3cccb5e58994a64922b82ca8880';

const getMovies = async () => {
  return await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response) =>
    response.json(),
  );
};

export default async function HomePage() {
  const movies: MovieInfoResponse = await getMovies();

  return (
    <div className="margincenter grid w-full max-w-[90%] grid-cols-5 gap-25 pb-50 pt-150 text-18">
      {movies.results.map((movie: MovieInfo) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
