'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MovieInfo } from '@/types/model/movie/MovieInfoResponse';

interface MovieInfoProps extends MovieInfo {
  innerRef?: (node?: Element | null | undefined) => void;
}

const Movie: React.FC<MovieInfoProps> = ({ id, title, poster_path, innerRef }) => {
  const router = useRouter();
  const clickImage = () => {
    router.push(`movies/${id}`);
  };

  return (
    <React.Fragment>
      <div className="" ref={innerRef}>
        <div className="grid-rows-[1fr auto] grid cursor-pointer place-items-center gap-20">
          <img
            className="min-h-full max-w-full rounded-10 opacity-[0.7] transition delay-[0.3s] ease-in-out hover:opacity-100"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            onClick={clickImage}
          />
          <Link href={`/movies/${id}`}>{title}</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movie;
