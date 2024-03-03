import { API_KEY } from '@/app/(home)/page';

const getMovieInfo = async (id: string) => {
  return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then((reponse) => reponse.json());
};

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);

  return (
    <div>
      <h3 className="text-20">Movie Info</h3>
      <h6>{JSON.stringify(movieInfo)}</h6>
    </div>
  );
}
