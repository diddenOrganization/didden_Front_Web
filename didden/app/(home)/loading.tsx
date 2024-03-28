import { Spinner } from 'flowbite-react';

export default function Loading() {
  return (
    <div className="fixed left-1/2 top-1/2 z-[9999] text-center">
      <Spinner color="purple" aria-label="Loading" size="xl" theme={{ size: { xl: 'size-50' } }} />
    </div>
  );
}
