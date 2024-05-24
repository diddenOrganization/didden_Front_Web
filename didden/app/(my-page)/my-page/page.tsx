'use client';

import { Accordion, AccordionPanel, CustomFlowbiteTheme, Tabs } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiClipboardList, HiUser } from 'react-icons/hi';

import { ImageInfo } from '@/types/model/image/ImageInfoResponse';

const customTabTheme: CustomFlowbiteTheme['tabs'] = {
  tablist: {
    tabitem: {
      base: 'flex items-center justify-center rounded-t-lg p-10 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      styles: {
        underline: {
          active: {
            on: 'active rounded-t-lg border-b-2 border-[#7a42f4] text-[#7a42f4]',
          },
        },
      },
      icon: 'mr-20 h-30 w-30',
    },
  },
  tabpanel: 'py-10',
};

const getImageList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TOUR_API_URL}/main/content/images`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

export default function MyPage() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setImageList(await getImageList());
    };
    fetchData();
  }, []);

  return (
    <div className="mt-30">
      <Tabs aria-label="Tabs with underline" style="underline" theme={customTabTheme}>
        <Tabs.Item active title="공지사항" icon={HiClipboardList}>
          <Accordion collapseAll>
            {imageList?.map((image: ImageInfo) => (
              <AccordionPanel key={image.contentId}>
                <Accordion.Title theme={{ arrow: { base: 'h-30 w-30 shrink-0' } }}>{image.contentId}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">content Id : {image.contentId}</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">content Image URI : {image.contentImageUri}</p>
                </Accordion.Content>
              </AccordionPanel>
            ))}
          </Accordion>
        </Tabs.Item>
        <Tabs.Item title="계정" icon={HiUser}></Tabs.Item>
      </Tabs>
    </div>
  );
}
