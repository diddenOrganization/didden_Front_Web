'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Badge, CustomFlowbiteTheme } from 'flowbite-react';

import { TourInfo } from '../types/model/tour/TourInfoResponse';

import { HighCodeTypeToText } from '@/types/const-objects/HighCodeType';
import { MiddleCodeTypeToText } from '@/types/const-objects/MiddleCodeType';

const customBageTheme: CustomFlowbiteTheme['badge'] = {
  root: {
    size: {
      sm: 'min-h-[-webkit-fill-available] text-sm',
    },
  },
};

interface TourInfoProps extends TourInfo {
  // eslint-disable-next-line no-unused-vars
  innerRef?: (node?: Element | null | undefined) => void;
}

const Tour: React.FC<TourInfoProps> = ({ contentId, title, highCode, middleCode, detailImage, innerRef }) => {
  const router = useRouter();
  const clickImage = () => {
    router.push(`/tour/${contentId}`);
  };

  return (
    <React.Fragment>
      <div ref={innerRef}>
        <div className="grid-rows-[1fr auto] grid cursor-pointer place-items-center rounded-3 border border-solid border-gray-300 shadow-md">
          {detailImage ? (
            <img
              className="max-h-[293px] min-h-[293px] min-w-full max-w-full object-cover opacity-100 transition delay-[0.3s] ease-in-out hover:opacity-100 md:max-h-[259px] md:min-h-[259px] md:opacity-[0.7]"
              src={`${detailImage}`}
              alt={title}
              onClick={clickImage}
            />
          ) : (
            <img
              className="max-h-[293px] min-h-[293px] min-w-full max-w-full object-cover opacity-100 transition delay-[0.3s] ease-in-out hover:opacity-100 md:max-h-[259px] md:min-h-[259px] md:opacity-[0.7]"
              src={'Image/defaultImage.png'}
              alt={title}
              onClick={clickImage}
            />
          )}
          <Link
            prefetch
            href={`/tour/${contentId}`}
            className="mx-5 my-5 h-25 w-[-webkit-fill-available] overflow-hidden text-ellipsis whitespace-pre text-center"
          >
            <div className="flex">
              <div className="w-[-webkit-fill-available] overflow-hidden text-ellipsis whitespace-pre text-left font-semibold">
                {title}
              </div>
              <div className="ml-auto flex gap-5">
                <Badge color="purple" size="sm" theme={customBageTheme}>
                  {HighCodeTypeToText(highCode)}
                </Badge>
                <Badge color="indigo" size="sm" theme={customBageTheme}>
                  {MiddleCodeTypeToText(middleCode)}
                </Badge>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tour;
