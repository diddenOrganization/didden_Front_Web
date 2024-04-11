import React from 'react';

import HotelDetail from './tourDetail/hotelDetail';
import FestivalDetail from './tourDetail/festivalDetail';
import LeportsDetail from './tourDetail/leportsDetail';
import FoodDetail from './tourDetail/foodDetail';
import ShoppingDetail from './tourDetail/shoppingDetail';
import TourismDetail from './tourDetail/tourismDetail';
import TravelDetail from './tourDetail/travelDetail';

export default function tourDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <img src={detail?.detailImage || '../../Image/defaultImage.png'} width={300} height={50} />
        <h1>{detail?.title}</h1>
        {detail?.serviceCode === 'HOTEL_TYPE' && <HotelDetail detail={detail} />}
        {detail?.serviceCode === 'FESTIVAL_TYPE' && <FestivalDetail detail={detail} />}
        {detail?.serviceCode === 'LEPORTS_TYPE' && <LeportsDetail detail={detail} />}
        {detail?.serviceCode === 'FOOD_TYPE' && <FoodDetail detail={detail} />}
        {detail?.serviceCode === 'SHOPPING_TYPE' && <ShoppingDetail detail={detail} />}
        {['TOURISM_TYPE_A01', 'TOURISM_TYPE_A02'].indexOf(detail?.serviceCode) !== -1 && (
          <TourismDetail detail={detail} />
        )}
        {detail?.serviceCode === 'TRAVEL_TYPE' && <TravelDetail detail={detail} />}
      </div>
    </React.Fragment>
  );
}
