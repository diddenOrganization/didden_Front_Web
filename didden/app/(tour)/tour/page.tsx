'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CustomFlowbiteTheme, Spinner, TextInput } from 'flowbite-react';
import { HiOutlineFilter } from 'react-icons/hi';

import Tour from '@/components/tour';
import { TourInfo } from '@/types/model/tour/TourInfoResponse';
import { HighCodeInfo } from '@/types/model/tour/HighCodeInfoResponse';
import { MiddleCodeInfo } from '@/types/model/tour/MiddleCodeInfoResponse';
import { MiddleCodeType } from '@/types/const-objects/MiddleCodeType';
import CategoryModal from '@/components/category-modal';

const customTextInputTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      colors: {
        gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-[#7a42f4] focus:ring-[#7a42f4] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#7a42f4] dark:focus:ring-[#7a42f4]',
      },
    },
  },
};

const getHighCodeList = async () => {
  const res = await fetch(`${process.env.tourApiUrl}/api/v1/tour/high-code`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

const getMiddleCodeList = async () => {
  const res = await fetch(`${process.env.tourApiUrl}/api/v1/tour/middle-code`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

const getTourList = async ({
  keyword,
  middleCodes,
  pageParam,
}: {
  keyword: string;
  middleCodes: string;
  pageParam: number;
}) => {
  const res = await fetch(
    `${process.env.tourApiUrl}/api/v1/tour/search?page=${pageParam}&size=20&keyword=${keyword}&optServiceMiddleCodes=${middleCodes}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

export default function TourPage() {
  const [highCodeList, setHighCodeList] = useState<HighCodeInfo[]>([]);
  const [middleCodeList, setMiddleCodeList] = useState<MiddleCodeInfo[]>([]);
  const [selectedCodeList, setSelectedCodeList] = useState<MiddleCodeType[]>([]);

  const [inputKeyword, setInputKeyword] = useState('');
  const [keyword, setKeyword] = useState('');
  const [middleCodes, setMiddleCodes] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const { ref, inView } = useInView();
  const {
    data: tourList,
    status,
    fetchStatus,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['tourList', keyword, middleCodes],
    queryFn: ({ pageParam = 0 }) => getTourList({ keyword, middleCodes, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const initialPage = allPages.length - 1;
      const nextPage = lastPage.length === 20 ? initialPage + 1 : undefined;
      return nextPage;
    },
  });

  const clickSearch = () => {
    setKeyword(inputKeyword);
    // getTourList({ keyword, middleCodes, pageParam: 0 });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      clickSearch();
    }
  };

  const closeModal = (codeType?: []) => {
    if (codeType) {
      setSelectedCodeList(codeType);
      setMiddleCodes(codeType?.join(',') || '');
      // getTourList({ keyword, middleCodes, pageParam: 0 });
    }
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [highCodeList, middleCodeList] = await Promise.allSettled([
        await getHighCodeList(),
        await getMiddleCodeList(),
      ]);
      if (highCodeList.status === 'fulfilled') {
        setHighCodeList(highCodeList.value);
      }
      if (middleCodeList.status === 'fulfilled') {
        setMiddleCodeList(middleCodeList.value);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      {status === 'success' && (
        <main className="flex flex-col items-center justify-between p-24 md:pt-50">
          <div className="flex w-full md:w-[60%]">
            <TextInput
              type="text"
              placeholder="원하는 어디든"
              shadow
              theme={customTextInputTheme}
              className="mb-20 flex-1"
              value={inputKeyword}
              onChange={(event) => setInputKeyword(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="ml-5 flex pt-13">
              <HiOutlineFilter style={{ color: '#7a42f4' }} onClick={() => setOpenModal(true)} />
              <CategoryModal
                openModal={openModal}
                closeModal={closeModal}
                highCodeList={highCodeList}
                middleCodeList={middleCodeList}
                selectedCodeList={selectedCodeList}
                setSelectedCodeList={setSelectedCodeList}
              />
            </button>
          </div>
          <div className="m-auto mb-5 mt-5 flex w-full grid-cols-1 flex-col gap-12 md:grid md:w-10/12 md:grid-cols-4 md:items-center">
            {tourList?.pages?.map((page) =>
              page.map((tour: TourInfo, index: number) => {
                if (page.length === index + 1) {
                  return (
                    <Tour
                      key={index}
                      contentId={tour.contentId}
                      title={tour.title}
                      highCode={tour.highCode}
                      middleCode={tour.middleCode}
                      serviceCode={tour.serviceCode}
                      address={tour.address}
                      detailImage={tour.detailImage}
                      innerRef={ref}
                    />
                  );
                } else {
                  return (
                    <Tour
                      key={index}
                      contentId={tour.contentId}
                      title={tour.title}
                      highCode={tour.highCode}
                      middleCode={tour.middleCode}
                      serviceCode={tour.serviceCode}
                      address={tour.address}
                      detailImage={tour.detailImage}
                    />
                  );
                }
              }),
            )}
          </div>
        </main>
      )}
      {(status === 'pending' || fetchStatus === 'fetching') && (
        <div className="fixed left-1/2 top-1/2 z-[9999] text-center">
          <Spinner color="purple" aria-label="Loading" size="xl" theme={{ size: { xl: 'size-50' } }} />
        </div>
      )}
    </>
  );
}
