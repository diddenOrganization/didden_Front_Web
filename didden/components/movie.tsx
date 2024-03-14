'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MovieInfo } from '@/types/model/movie/MovieInfoResponse';

interface MovieInfoProps extends MovieInfo {
  // eslint-disable-next-line no-unused-vars
  innerRef?: (node?: Element | null | undefined) => void;
}

const Movie: React.FC<MovieInfoProps> = ({ id, title, poster_path, innerRef }) => {
  const router = useRouter();
  const clickImage = () => {
    router.push(`movies/${id}`);
  };

  return (
    <React.Fragment>
      <div ref={innerRef}>
        <div className="grid-rows-[1fr auto] grid cursor-pointer place-items-center gap-20 pt-10">
          <img
            className="min-h-full max-w-full rounded-10 opacity-100 transition delay-[0.3s] ease-in-out hover:opacity-100 md:opacity-[0.7]"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            onClick={clickImage}
          />
          <Link
            href={`/movies/${id}`}
            className="h-25 w-[-webkit-fill-available] overflow-hidden text-ellipsis whitespace-pre text-center"
          >
            {title}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movie;
