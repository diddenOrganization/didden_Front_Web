'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MovieInfo } from '@/types/model/movie/MovieInfoResponse';

export default function Movie({ id, title, poster_path }: MovieInfo) {
  const router = useRouter();
  const clickImage = () => {
    router.push(`movies/${id}`);
  };

  return (
    <div className="grid-rows-[1fr auto] grid cursor-pointer place-items-center gap-20">
      <img
        className="min-h-full max-w-full rounded-10 opacity-[0.7] transition delay-[0.3s] ease-in-out hover:opacity-100"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        onClick={clickImage}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
