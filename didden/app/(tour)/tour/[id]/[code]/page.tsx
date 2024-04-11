'use client';

import { useEffect, useState } from 'react';

import Detail from '@/components/tourdetail';

const getTourDetail = async ({ id, code }: { id: string; code: string }) => {
  const res = await fetch(`${process.env.tourApiUrl}/api/v1/tour/${code}/content-type/${id}/details`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
};

export default function TourDetail({ params }: { params: { id: string; code: string } }) {
  const [tourDetail, setTourDetail] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTourDetail(params);
        setTourDetail(result);
      } catch (error) {
        console.error('Error fetching Tour Detail', error);
      }
    };

    fetchData();
  }, [params]);

  if (!tourDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Detail detail={tourDetail} />
    </div>
  );
}
