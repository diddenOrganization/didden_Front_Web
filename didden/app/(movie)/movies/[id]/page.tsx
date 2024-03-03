import { Metadata } from 'next';
import { Suspense } from 'react';

import MovieInfo from '@/components/movie-info';

export const metadata: Metadata = {
  title: 'Movie Info',
};

export default async function Movies({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info : {id}</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
