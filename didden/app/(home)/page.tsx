import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';

import { ImageInfo } from '@/types/model/image/ImagenfoResponse';

const customCarouselTheme: CustomFlowbiteTheme['carousel'] = {
  control: {
    base: 'inline-flex h-30 w-30 items-center justify-center rounded-full bg-white/30 group-hover:bg-gray-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-32 sm:w-32 md:bg-gray-300',
    icon: 'h-30 w-30 text-white dark:text-gray-800 sm:h-32 sm:w-32',
  },
};

const getImageList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${process.env.tourApiUrl}/main/content/images`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

export default async function HomePage() {
  const imageList = await getImageList();

  return (
    <div className="mt-140 grid h-600 grid-cols-1 md:mx-20 md:mt-80">
      <Carousel slideInterval={5000} theme={customCarouselTheme}>
        {imageList?.map((image: ImageInfo) => (
          <img
            className="h-full w-full rounded-5 object-cover md:object-scale-down"
            src={image.contentImageUri}
            alt={image.contentId}
            key={image.contentId}
          />
        ))}
      </Carousel>
    </div>
  );
}
